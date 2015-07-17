var uploadres = [];
var appAppliance = angular.module('appAppliance', ['applianceRest', 'ngRoute']);
window.uploadUrl = 'http://localhost/ApplionBackend/upload.php';

appAppliance.controller('appliance',
    function ($scope, applianceRest) {
        $scope.demo = "";
        var appliancesuccess = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.usermessage = "No data found";
                $scope.visibletable = false;

            } else {

                $scope.visibletable = true;
                $scope.find = data;
            }
        };
        applianceRest.find().success(appliancesuccess);


    });

appAppliance.controller('createappliance',
    function ($scope, applianceRest, $location, $http, $timeout, $upload) {
        var imagejstupld = [];
        $scope.appliance = {};
        $scope.appliance.billimage = [];
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
        $scope.onFileSelect = function ($files) {
            $scope.selectedFiles = [];
            $scope.progress = [];
            console.log($files);
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
                    $scope.start(i);
                }
            }
        };

        $scope.start = function (index) {
            $scope.progress[index] = 0;
            $scope.errorMsg = null;
            if ($scope.howToSend == 1) {
                console.log("Jagruti");
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
                        //                    console.log(response.data);
                        imagejstupld = response.data;
                        if (imagejstupld != "") {
                            console.log(imagejstupld);
                            $scope.appliance.billimage.push(imagejstupld);
                            console.log($scope.appliance.billimage);
                        }
                        console.log(imagejstupld);
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
                    console.log("CHI");
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


        $scope.removeimage = function (i) {
            $scope.appliance.billimage.splice(i, 1);
        };

        var appliancetype = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.appliancetype = data;
        };
        applianceRest.findappliancetype().success(appliancetype);

        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.brand = data;
        };
        applianceRest.findbrand().success(brand);

        var userlocation = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.userlocation = data;
        };
        applianceRest.finduserlocation().success(userlocation);

        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.user = data;
        };
        applianceRest.finduser().success(user);

        var store = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.store = data;
        };
        applianceRest.findstore().success(store);

        var appliancecreated = function (data, status) {
            console.log(data);
            $location.url("/appliance");
            uploadres = [];
        }
        $scope.create = function (data) {
            applianceRest.create(data).success(appliancecreated);
        };
    });

appAppliance.controller('editappliance',
    function ($scope, applianceRest, $location, $routeParams, $timeout, $upload) {
        $scope.id = $routeParams.id;
        $scope.locationindex = "";
        var imagejstupld = [];
        //    ###########################################################
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

        $scope.uploaded = function (c) {
            console.log(c);
        }

        $scope.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ?
            window.location.hash.substring(2) : window.location.hash.substring(1)) : '1.2.20';

        $scope.howToSend = 1;
        var start = function (index, whichone) {
            $scope.progress[index] = 0;
            $scope.errorMsg = null;

            if ($scope.howToSend == 1) {
                console.log("CCC");
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
                                $scope.appliance.billimage.push(imagejstupld);
                                imagejstupld = [];
                            }
                        } else if (whichone == 2) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.appliance.warranty[$scope.locationindex].images.push(imagejstupld);
                                console.log($scope.appliance.warranty);
                                imagejstupld = [];
                            }
                        } else if (whichone == 3) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.appliance.componentwarranty[$scope.locationindex].bill = imagejstupld;
                                console.log($scope.appliance);
                                imagejstupld = [];
                            }
                        } else if (whichone == 4) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.appliance.componentwarranty[$scope.locationindex].warrantycard = imagejstupld;
                                console.log($scope.appliance);
                                imagejstupld = [];
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


        $scope.onFileSelect = function ($files, whichone, index) {
            $scope.locationindex = index;
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
            console.log(uploadres);
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
                    console.log("Android");
                    start(i, whichone);
                }
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
        //    ###########################################################


        $scope.value = $routeParams.id;
        toastr.success($scope.value);
        $scope.appliance = {};
        $scope.appliance.billimage = [];
        $scope.appliance.warranty = [];
        $scope.appliance.warranty.images = [];

        $scope.addcomponentwarranty = function () {
            $scope.appliance.componentwarranty.push({
                component: "",
                serial: '',
                warrantyperiod: '',
                bill: '',
                warrantycard: ''
            });
        };
        $scope.removecomponentwarranty = function (i) {
            $scope.appliance.componentwarranty.splice(i, 1);
        };

        $scope.addwarranty = function () {
            $scope.appliance.warranty.push({
                period: "",
                type: "",
                expiry: "",
                iscovered: "",
                iswarrentyoramc: "",
                purchasedate: "",
                billno: "",
                images: [],
                store: "",
                includes: ""
            });
        };
        $scope.removewarranty = function (i) {
            $scope.appliance.warranty.splice(i, 1);
        };
        $scope.removeimage = function (i) {
            $scope.appliance.billimage.splice(i, 1);
        };
        $scope.removewarimage = function (warranty, i) {
            warranty.images.splice(i, 1);
        };
        $scope.pageview = 1;
        $scope.changepageview = function (num) {
            $scope.pageview = num;
        }


        var appliancetype = function (data, status) {
            console.log(data);
            $scope.appliancetype = data;
        };
        applianceRest.findappliancetype().success(appliancetype);

        var brand = function (data, status) {
            console.log(data);
            $scope.brand = data;
        };
        applianceRest.findbrand().success(brand);

        var userlocation = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.userlocation = data;
        };
        applianceRest.finduserlocation().success(userlocation);

        var user = function (data, status) {
            console.log(data);
            $scope.user = data;
        };
        applianceRest.finduser().success(user);

        var store = function (data, status) {
            console.log(data);
            $scope.store = data;
        };
        applianceRest.findstore().success(store);

        var findappliance = function (data, status) {
            $scope.appliance = {};
            $scope.appliance = data;
            _.each($scope.appliance.warranty, function (n) {
                n.expiry = new Date(n.expiry);
                n.purchasedate = new Date(n.purchasedate);
            });
            $scope.appliance.brand = $scope.appliance.brand.id;
            $scope.appliance.user = $scope.appliance.user.id;
            $scope.appliance.store = $scope.appliance.store.id;
            $scope.appliance.appliancetype = $scope.appliance.appliancetype.id;
            $scope.appliance.userlocation = $scope.appliance.userlocation.id;
            console.log(data);
        };
        applianceRest.findoneappliance($scope.value).success(findappliance);


        var appliance = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        applianceRest.find().success(appliance);

        var updated = function (data, status) {
            applianceRest.find().success(appliance);
            uploadres = [];
            $location.url("/appliance");
            toastr.success("appliance Updated");
        };


        $scope.update = function (data) {
            applianceRest.updateappliance($scope.appliance).success(updated);
        };
        $scope.update2 = function (data) {
            //            for (var i = 0; i < $scope.appliance.warranty.length; i++) {
            //                if ($scope.appliance.warranty[i].images == "") {
            //                    $scope.appliance.warranty[i].images = uploadres;
            //                } else {
            //                    for (var k = 0; k < uploadres.length; k++) {
            //                        $scope.appliance.warranty[i].images.push(uploadres[k]);
            //                    }
            //                }
            //            }
            //            console.log($scope.appliance);
            applianceRest.updateappliance($scope.appliance).success(updated);
        };
    });

appAppliance.controller('deleteappliance',
    function ($scope, applianceRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);


        var appliancetype = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.appliancetype = data;
        };
        applianceRest.findappliancetype().success(appliancetype);

        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.brand = data;
        };
        applianceRest.findbrand().success(brand);

        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.user = data;
        };
        applianceRest.finduser().success(user);

        var store = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.store = data;
        };
        applianceRest.findstore().success(store);

        var findappliance = function (data, status) {
            $scope.appliance = {};
            $scope.appliance = data;
            $scope.alldata = data;
            $scope.appliance.appliancetype = $scope.appliance.appliancetype.id;
            $scope.appliance.brand = $scope.appliance.brand.id;
            $scope.appliance.user = $scope.appliance.user.id;
            $scope.appliance.store = $scope.appliance.store.id;
        };

        applianceRest.findoneappliance($scope.value).success(findappliance);


        var appliance = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        applianceRest.find().success(appliance);


        ondelete = function (data, status) {
            toastr.success("appliance Deleted");
            $location.url("/appliance");
            applianceRest.find().success(appliance);
        };


        $scope.delete = function () {
            // $scope.usermessage=id;
            applianceRest.deleteappliance($scope.value).success(ondelete);
        };

    });