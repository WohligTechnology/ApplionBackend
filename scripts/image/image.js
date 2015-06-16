var appImage = angular.module('appImage', ['imageRest', 'ngRoute']);

appImage.controller('image',
    function ($scope, imageRest) {
        $scope.demo = "";
        var imagesuccess = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.usermessage = "No data found";
                $scope.visibletable = false;

            } else {

                $scope.visibletable = true;
                $scope.find = data;
            }
        };
        imageRest.find().success(imagesuccess);


    });

appImage.controller('createimage',
    function ($scope, imageRest, $location) {
        $scope.demo = "hello";
        var insertimagesuccess = function (data, status) {
            console.log(data);
            $location.url("/image");
        }


        $scope.insertimage = function (data) {
            console.log("This is it");
            console.log(data);
        $scope.image= $(".myiframe").contents().find("body img").attr("src");
            console.log($scope.image);
        imageRest.create(data,$scope.image).success(insertimagesuccess);
            
        };
    });

appImage.controller('editimage',
    function ($scope, imageRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findimage = function (data, status) {
            $scope.image = {};
            $scope.image = data;
            console.log(data);
            // $scope.alldata = data;
        };

        imageRest.findoneimage($scope.value).success(findimage);


        var image = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        imageRest.find().success(image);

        var updated = function (data, status) {
            imageRest.find().success(image);
            // $scope.visibletable = true;
            // $scope.updatearea = false;
            $location.url("/image");
            toastr.success("image Updated");
        };


        $scope.update = function (data) {
            imageRest.updateimage(data).success(updated);
        };


    });

appImage.controller('deleteimage',
    function ($scope, imageRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findimage = function (data, status) {
            $scope.image = {};
            $scope.image = data;
            $scope.alldata = data;
        };

        imageRest.findoneimage($scope.value).success(findimage);


        var image = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        imageRest.find().success(image);


        ondelete = function (data, status) {
            toastr.success("image Deleted");
            $location.url("/image");
            imageRest.find().success(image);
        };


        $scope.delete = function () {
            // $scope.usermessage=id;
            imageRest.deleteimage($scope.value).success(ondelete);
        };

    });