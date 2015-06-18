var uploadres = [];
var appBrand = angular.module('appBrand', ['brandRest', 'ngRoute', 'angularFileUpload']);
window.uploadUrl = 'http://localhost/applionbackendbyavi/upload.php';
appBrand.controller('brand',
    function ($scope, brandRest) {
        $scope.demo = "";
        var brandsuccess = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.usermessage = "No data found";
                $scope.visibletable = false;
            } else {
                $scope.visibletable = true;
                $scope.find = data;
            }
        };
        brandRest.find().success(brandsuccess);


    });
appBrand.controller('createbrand',
    function ($scope, brandRest, $location, $http, $timeout, $upload) {
        $scope.brand = {};
        var imagejstupld = "";
        //    ###########################################################3
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

        $scope.howToSend = 1;
        var start = function (index) {
            $scope.progress[index] = 0;
            $scope.errorMsg = null;

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
                        if (imagejstupld != "") {
                            console.log(imagejstupld);
                            $scope.brand.image = imagejstupld;
                            console.log($scope.brand);
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


        $scope.onFileSelect = function ($files) {
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
                    start(i);
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
        //    ###########################################################3

        $scope.demo = "hello";
        var brandcreated = function (data, status) {
            console.log(data);
            $location.url("/brand");
        }
        $scope.create = function (data) {
            brandRest.create(data,brandcreated);
        };
    });

appBrand.controller('editbrand',
    function ($scope, brandRest, $location, $routeParams, $http, $timeout, $upload) {
        $scope.id = $routeParams.id;
        $scope.locationindex = "";
        var imagejstupld = "";
        //        console.log(imagejstupld);
        //    ###########################################################3
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

        $scope.howToSend = 1;
        var start = function (index,whichone) {
            $scope.progress[index] = 0;
            $scope.errorMsg = null;

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
                                $scope.brand.image.push(imagejstupld);
                                imagejstupld="";
                            }
                        } else if (whichone == 2) {
                            if (imagejstupld != "") {
                                console.log(imagejstupld);
                                $scope.brand.appliancetype[$scope.locationindex].icon.push(imagejstupld);
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


        $scope.onFileSelect = function ($files,whichone,index) {
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
                    start(i,whichone);
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
        //    ###########################################################3

        $scope.value = $routeParams.id;
        $scope.brand = [];
        toastr.success($scope.value);
        $scope.addappliancetype = function () {
            $scope.brand.appliancetype.push({
                name: "",
                icon: "",
                abbreviation: ""
            });
        };
        $scope.removeappliancetype = function (i) {
            $scope.brand.appliancetype.splice(i, 1);
        };
        $scope.pageview = 1;
        $scope.changepageview = function (num) {
            $scope.pageview = num;
        }
        var findbrand = function (data, status) {
            $scope.brand = {};
            $scope.brand = data;
            //            $scope.brand.status=$scope.brand.pincode.id;
            console.log(data);
            // $scope.alldata = data;
        };

        brandRest.findonebrand($scope.value).success(findbrand);


        var brand = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        brandRest.find().success(brand);

        var updated = function (data, status) {
            brandRest.find().success(brand);
            uploadres = [];
            // $scope.visibletable = true;
            // $scope.updatearea = false;
            $location.url("/brand");
            toastr.success("Brand Updated");
        };


        $scope.update = function (data) {
            brandRest.updatebrand($scope.brand).success(updated);
        };
        $scope.update2 = function (data) {
            brandRest.updatebrand($scope.brand).success(updated);
        };
    });

appBrand.controller('deletebrand',
    function ($scope, brandRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findbrand = function (data, status) {
            $scope.brand = {};
            $scope.brand = data;
            $scope.alldata = data;
        };

        brandRest.findonebrand($scope.value).success(findbrand);


        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        brandRest.find().success(brand);


        ondelete = function (data, status) {
            toastr.success("brand Deleted");
            $location.url("/brand");
            brandRest.find().success(brand);
        };


        $scope.delete = function () {
            // $scope.usermessage=id;
            brandRest.deletebrand($scope.value).success(ondelete);
        };

    });