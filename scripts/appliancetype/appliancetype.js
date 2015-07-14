var uploadres = [];
var appAppliancetype = angular.module('appAppliancetype', ['appliancetypeRest', 'ngRoute', 'angularFileUpload']);
window.uploadUrl = 'http://wohlig.co.in/ApplionBackend/upload.php';
appAppliancetype.controller('appliancetype',
    function ($scope, appliancetypeRest) {
        $scope.demo = "";
        var appliancetypesuccess = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.usermessage = "No data found";
                $scope.visibletable = false;
            } else {
                $scope.visibletable = true;
                $scope.find = data;
            }
        };
        appliancetypeRest.find().success(appliancetypesuccess);


    });
appAppliancetype.controller('createappliancetype',
    function ($scope, appliancetypeRest, $location, $http, $timeout, $upload) {
        $scope.appliancetype = {};
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
                            $scope.appliancetype.icon = imagejstupld;
                            console.log($scope.appliancetype);
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
        var appliancetypecreated = function (data, status) {
            console.log(data);
            $location.url("/appliancetype");
        }
        $scope.create = function (data) {
            appliancetypeRest.create(data).success(appliancetypecreated);
        };
    });

appAppliancetype.controller('editappliancetype',
    function ($scope, appliancetypeRest, $location, $routeParams, $http, $timeout, $upload) {
        $scope.id = $routeParams.id;
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
                            $scope.appliancetype.icon = imagejstupld;
                            imagejstupld = "";
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
                    console.log("Android");
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
       

        $scope.value = $routeParams.id;
        $scope.appliancetype = {};
        toastr.success($scope.value);

        var findappliancetype = function (data, status) {
            $scope.appliancetype = {};
            $scope.appliancetype = data;
//            $scope.appliancetype.brand = $scope.appliancetype.brand.id;
            console.log(data);
        };

        appliancetypeRest.findoneappliancetype($scope.value).success(findappliancetype);


        var appliancetype = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        appliancetypeRest.find().success(appliancetype);

        var updated = function (data, status) {
            appliancetypeRest.find().success(appliancetype);
            uploadres = [];
            // $scope.visibletable = true;
            // $scope.updatearea = false;
            $location.url("/appliancetype");
            toastr.success("appliancetype Updated");
        };


        $scope.update = function (data) {
            appliancetypeRest.updateappliancetype($scope.appliancetype).success(updated);
        };
    });

appAppliancetype.controller('deleteappliancetype',
    function ($scope, appliancetypeRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        

        var findappliancetype = function (data, status) {
            $scope.appliancetype = {};
            $scope.appliancetype = data;
//            $scope.appliancetype.brand = $scope.appliancetype.brand.id;
            $scope.alldata = data;
        };

        appliancetypeRest.findoneappliancetype($scope.value).success(findappliancetype);


        var appliancetype = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        appliancetypeRest.find().success(appliancetype);


        ondelete = function (data, status) {
            toastr.success("appliancetype Deleted");
            $location.url("/appliancetype");
            appliancetypeRest.find().success(appliancetype);
        };


        $scope.delete = function () {
            appliancetypeRest.deleteappliancetype($scope.value).success(ondelete);
        };

    });