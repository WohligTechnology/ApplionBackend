var appUser = angular.module('appUser', ['userRest', 'ngRoute']);
var abc={};
appUser.controller('user',
    function ($scope, userRest) {
        $scope.demo = "";
        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.data99 = data;
            if (data == "false") {
                $scope.usermessage = "No data found";
                $scope.visibletable = false;

            } else {

                $scope.visibletable = true;
                $scope.find = data;
            }
        };
        userRest.find().success(user);


    });
appUser.controller('createuser',
    function ($scope, userRest, $location, $filter) {
        $scope.demo = "hello";
        $scope.span = false;
        var country = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.country = data;
        };
        userRest.findcountry().success(country);

        var userloaction = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.userlocation = data;
        };
        userRest.finduserlocation().success(userloaction);

        var usercreated = function (data, status) {
            console.log(data);
            $location.url("/user");
        }


        $scope.create = function (data) {
            console.log(data);
            if ($scope.user.password == $scope.user.cpassword) {
                $scope.span = false;
                userRest.create(data).success(usercreated);
            } else {
                $scope.span = true;
            }

        };
    });

appUser.controller('edituser',
    function ($scope, userRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
        $scope.addlocation = function () {
            $scope.user.userlocation.push({
                name: "",
                address: '',
                district: '',
                state: '',
                country: '',
                pincode: ''
            });
        };
    abc=$scope;
        $scope.removelocation = function (i) {
            $scope.user.userlocation.splice(i, 1);
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
        userRest.findcountry().success(country);

        var userloaction = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.userlocation = data;
        };
        userRest.finduserlocation().success(userloaction);
        
        var finduser = function (data, status) {
            $scope.user = {};
            console.log(data);
            $scope.user = data;
            $scope.user.dob = new Date($scope.user.dob);
            $scope.user.country = $scope.user.country.id;
            $scope.user.userlocation.country = $scope.user.userlocation.country.id;
            $scope.alldata = data;
        };
        userRest.findoneuser($scope.value).success(finduser);
        
        var country="";
        $scope.changelocationcountry=function(location) {
            console.log(location);
            country=location.country;
            location.country="";
//            location.country=country;
        }
        $scope.changelocationcountry2=function(location) {
            location.country=country;
        }
    

       
        var updated = function (data, status) {
            userRest.find().success(user);
            // $scope.visibletable = true;
            // $scope.updatearea = false;
            $location.url("/user");
            toastr.success("User Updated");
        };
        $scope.span = false;
        $scope.update = function (data) {
            if ($scope.user.editpassword == $scope.user.editcpassword) {
                $scope.span = false;
                userRest.updateuser(data).success(updated);
            } else {
                $scope.span = true;
            }
        };
        $scope.update2 = function (data) {
            userRest.updateuser(data).success(updated);
        };
    });


appUser.controller('deleteuser',
    function ($scope, userRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);


        var country = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.country = data;
        };
        userRest.findcountry().success(country);


        var userloaction = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.userlocation = data;
        };
        userRest.finduserlocation().success(userloaction);



        var finduser = function (data, status) {
            $scope.user = {};
            $scope.user = data;
            $scope.alldata = data;
        };

        userRest.findoneuser($scope.value).success(finduser);


        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        userRest.find().success(user);


        ondelete = function (data, status) {
            toastr.success("User Deleted");
            $location.url("/user");
            userRest.find().success(user);
        };


        $scope.delete = function () {
            // $scope.usermessage=id;
            userRest.deleteuser($scope.value).success(ondelete);
        };

    });