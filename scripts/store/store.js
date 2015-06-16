var appStore = angular.module('appStore', ['storeRest', 'ngRoute']);
window.uploadUrl = 'http://localhost/applionbackendbyavi/upload.php';
appStore.controller('store',
    function ($scope, storeRest) {
        $scope.demo = "";
        var storesuccess = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.usermessage = "No data found";
                $scope.visibletable = false;

            } else {

                $scope.visibletable = true;
                $scope.find = data;
            }
        };
        storeRest.find().success(storesuccess);


    });

appStore.controller('createstore',
    function ($scope, storeRest, $location, $http, $timeout, $upload) {
        var imagejstupld = "";
        $scope.usingFlash = FileAPI && FileAPI.upload != null;
        $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
        $scope.uploadRightAway = true;
        $scope.changeAngularVersion = function () {
            window.location.hash = $scope.angularVersion;
            window.location.reload(true);
        };
        $scope.hasUploader = function (index) {
            return $scope.upload[index] != null;
        };
        $scope.abort = function (index) {
            $scope.upload[index].abort();
            $scope.upload[index] = null;
        };
        $scope.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ?
            window.location.hash.substring(2) : window.location.hash.substring(1)) : '1.2.20';
        $scope.onFileSelect = function ($files, whichone) {
            $scope.selectedFiles = [];
            $scope.progress = [];
            if ($scope.upload && $scope.upload.length > 0) {
                for (var i = 0; i < $scope.upload.length; i++) {
                    if ($scope.upload[i] != null) {
                        $scope.upload[i].abort();
                    }
                }
            }
            $scope.upload = [];
            $scope.uploadResult = uploadres;
            $scope.selectedFiles = $files;
            $scope.dataUrls = [];
            for (var i = 0; i < $files.length; i++) {
                var $file = $files[i];
                if ($scope.fileReaderSupported && $file.type.indexOf('image') > -1) {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL($files[i]);
                    var loadFile = function (fileReader, index) {
                        fileReader.onload = function (e) {
                            $timeout(function () {
                                $scope.dataUrls[index] = e.target.result;
                            });
                        }
                    }(fileReader, i);
                }
                $scope.progress[i] = -1;
                if ($scope.uploadRightAway) {
                    $scope.start(i, whichone);
                }
            }
        };

        $scope.start = function (index, whichone) {
            $scope.progress[index] = 0;
            $scope.errorMsg = null;
            $scope.howToSend = 1;
            if ($scope.howToSend == 1) {
                $scope.upload[index] = $upload.upload({
                    url: uploadUrl,
                    method: $scope.httpMethod,
                    headers: {
                        'my-header': 'my-header-value'
                    },
                    data: {
                        myModel: $scope.myModel
                    },
                    /* formDataAppender: function(fd, key, val) {
					if (angular.isArray(val)) {
                        angular.forEach(val, function(v) {
                          fd.append(key, v);
                        });
                      } else {
                        fd.append(key, val);
                      }
				}, */
                    /* transformRequest: [function(val, h) {
					console.log(val, h('my-header')); return val + '-modified';
				}], */
                    file: $scope.selectedFiles[index],
                    fileFormDataName: 'file'
                });
                $scope.upload[index].then(function (response) {
                    $timeout(function () {
                        $scope.uploadResult.push(response.data);
                        console.log(response.data);
                        imagejstupld = response.data;
                        if (whichone == 1) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.store.pancardimage = imagejstupld;
                                console.log($scope.store.pancardimage);
                                imagejstupld = "";
                            }
                        } else if (whichone == 2) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.store.samplebillimage = imagejstupld;
                                console.log($scope.store.samplebillimage);
                                imagejstupld = "";
                            }
                        } else if (whichone == 3) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.store.storephotoimage = imagejstupld;
                                console.log($scope.store.storephotoimage);
                                imagejstupld = "";
                            }
                        } else if (whichone == 4) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.store.licenseimage = imagejstupld;
                                console.log($scope.store.licenseimage);
                                imagejstupld = "";
                            }
                        }
                    });
                }, function (response) {
                    if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    // Math.min is to fix IE which reports 200% sometimes
                    $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
                $scope.upload[index].xhr(function (xhr) {
                    //				xhr.upload.addEventListener('abort', function() {console.log('abort complete')}, false);
                });
            } else {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    $scope.upload[index] = $upload.http({
                        url: uploadUrl,
                        headers: {
                            'Content-Type': $scope.selectedFiles[index].type
                        },
                        data: e.target.result
                    }).then(function (response) {
                        $scope.uploadResult.push(response.data);
                    }, function (response) {
                        if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                    }, function (evt) {
                        // Math.min is to fix IE which reports 200% sometimes
                        $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                }
                fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
            }
        };

        $scope.dragOverClass = function ($event) {
            var items = $event.dataTransfer.items;
            var hasFile = false;
            if (items != null) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].kind == 'file') {
                        hasFile = true;
                        break;
                    }
                }
            } else {
                hasFile = true;
            }
            return hasFile ? "dragover" : "dragover-err";
        };
        $scope.demo = "hello";
        var country = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.country = data;
        };
        storeRest.findcountry().success(country);

        var holidaycalender = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.holidaycalender = data;

        };
        storeRest.findholidaycalender().success(holidaycalender);

        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.brand = data;
        };
        storeRest.findbrand().success(brand);

        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.user = data;
        };
        storeRest.finduser().success(user);


        var storecreated = function (data, status) {
            console.log(data);
            $location.url("/store");
        }


        $scope.create = function (data) {
            console.log(data);
            storeRest.create(data).success(storecreated);
        };
    });

appStore.controller('editstore',
    function ($scope, storeRest, $location, $routeParams, $http, $timeout, $upload) {
        var imagejstupld = "";
        $scope.usingFlash = FileAPI && FileAPI.upload != null;
        $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
        $scope.uploadRightAway = true;
        $scope.changeAngularVersion = function () {
            window.location.hash = $scope.angularVersion;
            window.location.reload(true);
        };
        $scope.hasUploader = function (index) {
            return $scope.upload[index] != null;
        };
        $scope.abort = function (index) {
            $scope.upload[index].abort();
            $scope.upload[index] = null;
        };
        $scope.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ?
            window.location.hash.substring(2) : window.location.hash.substring(1)) : '1.2.20';
        $scope.onFileSelect = function ($files, whichone) {
            $scope.selectedFiles = [];
            $scope.progress = [];
            if ($scope.upload && $scope.upload.length > 0) {
                for (var i = 0; i < $scope.upload.length; i++) {
                    if ($scope.upload[i] != null) {
                        $scope.upload[i].abort();
                    }
                }
            }
            $scope.upload = [];
            $scope.uploadResult = uploadres;
            $scope.selectedFiles = $files;
            $scope.dataUrls = [];
            for (var i = 0; i < $files.length; i++) {
                var $file = $files[i];
                if ($scope.fileReaderSupported && $file.type.indexOf('image') > -1) {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL($files[i]);
                    var loadFile = function (fileReader, index) {
                        fileReader.onload = function (e) {
                            $timeout(function () {
                                $scope.dataUrls[index] = e.target.result;
                            });
                        }
                    }(fileReader, i);
                }
                $scope.progress[i] = -1;
                if ($scope.uploadRightAway) {
                    $scope.start(i, whichone);
                }
            }
        };

        $scope.start = function (index, whichone) {
            $scope.progress[index] = 0;
            $scope.errorMsg = null;
            $scope.howToSend = 1;
            if ($scope.howToSend == 1) {
                $scope.upload[index] = $upload.upload({
                    url: uploadUrl,
                    method: $scope.httpMethod,
                    headers: {
                        'my-header': 'my-header-value'
                    },
                    data: {
                        myModel: $scope.myModel
                    },
                    /* formDataAppender: function(fd, key, val) {
					if (angular.isArray(val)) {
                        angular.forEach(val, function(v) {
                          fd.append(key, v);
                        });
                      } else {
                        fd.append(key, val);
                      }
				}, */
                    /* transformRequest: [function(val, h) {
					console.log(val, h('my-header')); return val + '-modified';
				}], */
                    file: $scope.selectedFiles[index],
                    fileFormDataName: 'file'
                });
                $scope.upload[index].then(function (response) {
                    $timeout(function () {
                        $scope.uploadResult.push(response.data);
                        console.log(response.data);
                        imagejstupld = response.data;
                        if (whichone == 1) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.store.pancardimage = imagejstupld;
                                console.log($scope.store.pancardimage);
                                imagejstupld = "";
                            }
                        } else if (whichone == 2) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.store.samplebillimage = imagejstupld;
                                console.log($scope.store.samplebillimage);
                                imagejstupld = "";
                            }
                        } else if (whichone == 3) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.store.storephotoimage = imagejstupld;
                                console.log($scope.store.storephotoimage);
                                imagejstupld = "";
                            }
                        } else if (whichone == 4) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.store.licenseimage = imagejstupld;
                                console.log($scope.store.licenseimage);
                                imagejstupld = "";
                            }
                        }
                    });
                }, function (response) {
                    if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    // Math.min is to fix IE which reports 200% sometimes
                    $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
                $scope.upload[index].xhr(function (xhr) {
                    //				xhr.upload.addEventListener('abort', function() {console.log('abort complete')}, false);
                });
            } else {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    $scope.upload[index] = $upload.http({
                        url: uploadUrl,
                        headers: {
                            'Content-Type': $scope.selectedFiles[index].type
                        },
                        data: e.target.result
                    }).then(function (response) {
                        $scope.uploadResult.push(response.data);
                    }, function (response) {
                        if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                    }, function (evt) {
                        // Math.min is to fix IE which reports 200% sometimes
                        $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                }
                fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
            }
        };

        $scope.dragOverClass = function ($event) {
            var items = $event.dataTransfer.items;
            var hasFile = false;
            if (items != null) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].kind == 'file') {
                        hasFile = true;
                        break;
                    }
                }
            } else {
                hasFile = true;
            }
            return hasFile ? "dragover" : "dragover-err";
        };
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
        $scope.addrating = function () {
            $scope.store.rating.push({
                user: '',
                globalrating: "",
                timelyrating: '',
                servicechargesrating: '',
                servicequalityrating: ''
            });
        };
        $scope.removerating = function (i) {
            $scope.store.rating.splice(i, 1);
        };
        $scope.addcallrating = function () {
            $scope.store.callrating.push({
                spokentoname: "",
                discussion: '',
                rating: ''
            });
        };
        $scope.removecallrating = function (i) {
            $scope.store.callrating.splice(i, 1);
        };
        $scope.addservicereport = function () {
            $scope.store.servicereport.push({
                calltype: "",
                agencyname: '',
                serviceengineername: '',
                problemdetail: '',
                servicerender: '',
                callstatus: '',
                feedback: '',
                globalrating: '',
                timelyrating: '',
                servicechangesrating: '',
                servicequalityrating: ''
            });
        };
        $scope.removeservicereport = function (i) {
            $scope.store.servicereport.splice(i, 1);
        };

        $scope.pageview = 1;
        $scope.changepageview = function (num) {
            $scope.pageview = num;
        }


        var country = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.country = data;

        };
        storeRest.findcountry().success(country);

        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.brand = data;
        };
        storeRest.findbrand().success(brand);

        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.user = data;
        };
        storeRest.finduser().success(user);

        var holidaycalender = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.holidaycalender = data;

        };
        storeRest.findholidaycalender().success(holidaycalender);

        var findstore = function (data, status) {
            console.log(data);
            $scope.store = {};
            $scope.store = data;
            $scope.store.country = $scope.store.country.id;
            $scope.store.user = $scope.store.user.id;
            $scope.store.rating.user = $scope.store.rating.user;
            $scope.store.holidaycalender = $scope.store.holidaycalender.id;
            console.log(data);
            // $scope.alldata = data;
        };

        storeRest.findonestore($scope.value).success(findstore);


        var store = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        storeRest.find().success(store);

        var updated = function (data, status) {
            storeRest.find().success(store);
            $location.url("/store");
            toastr.success("store Updated");
        };


        $scope.update = function (data) {
            console.log(data);
            storeRest.updatestore(data).success(updated);
        };


    });

appStore.controller('deletestore',
    function ($scope, storeRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);



        var country = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.country = data;

        };
        storeRest.findcountry().success(country);

        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.brand = data;
        };
        storeRest.findbrand().success(brand);

        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.user = data;
        };
        storeRest.finduser().success(user);


        var findstore = function (data, status) {
            $scope.store = {};
            $scope.store = data;
            $scope.store.country = $scope.store.country.id;
            $scope.store.user = $scope.store.user.id;
            console.log(data);
            // $scope.alldata = data;
        };

        storeRest.findonestore($scope.value).success(findstore);


        var store = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        storeRest.find().success(store);


        ondelete = function (data, status) {
            toastr.success("store Deleted");
            $location.url("/store");
            storeRest.find().success(store);
        };


        $scope.delete = function () {
            // $scope.usermessage=id;
            storeRest.deletestore($scope.value).success(ondelete);
        };

    });