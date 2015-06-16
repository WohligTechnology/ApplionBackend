var appDistrict = angular.module('appDistrict', ['districtRest', 'ngRoute']);

appDistrict.controller('district', function ($scope, districtRest) {
    $scope.demo = "";
    var district = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.data99 = data;
        if (data == "false") {
            $scope.districtmessage = "No data found";
            $scope.visibletable = false;

        } else {

            $scope.visibletable = true;
            $scope.find = data;
        }
    };
    districtRest.find().success(district);


});

appDistrict.controller('createdistrict', function ($scope, districtRest, $location) {
    $scope.demo = "hello";
    var state = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.state = data;
    };
    districtRest.findstate().success(state);

    //      var userloaction=function(data,status){
    //          console.log(data);
    //          // $scope.find=data;
    //          $scope.userlocation=data;
    //      };
    //     pincodeRest.finduserlocation().success(userloaction);

    var districtcreated = function (data, status) {
        console.log(data);
        $location.url("/district");
    }
    $scope.create = function (data) {
        console.log(data);
        districtRest.create(data).success(districtcreated);
    };
});

appDistrict.controller('editdistrict', function ($scope, districtRest, $location, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.value = $routeParams.id;
    toastr.success($scope.value);


    var state = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.state = data;

    };
    districtRest.findstate().success(state);

    //      var userloaction=function(data,status){
    //          console.log(data);
    //          // $scope.find=data;
    //          $scope.userlocation=data;
    //      };
    //     pincodeRest.finduserlocation().success(userloaction);
    //    


    var finddistrict = function (data, status) {
        $scope.district = {};
        $scope.district = data;
        $scope.district.state = $scope.district.state.id;
        //            $scope.user.dob=moment($scope.user.dob).format('YYYY-MM-DD');
        //            $scope.user.dob=$filter('date')($scope.user.date, "dd/MM/yyyy");
        //            console.log($scope.user.dob);
        //                $scope.user.pincode.id;
        $scope.alldata = data;
    };

    districtRest.findonedistrict($scope.value).success(finddistrict);


    var district = function (data, status) {
        console.log(data);
        if (data == "false") {
            $scope.demo = "No data found";
            $scope.visibletable = false;

        } else {
            $scope.find = data;
        }
    };
    districtRest.find().success(district);

    var updated = function (data, status) {
        districtRest.find().success(district);
        // $scope.visibletable = true;
        // $scope.updatearea = false;
        $location.url("/district");
        toastr.success("District Updated");
    };
    $scope.update = function (data) {
        districtRest.updatedistrict(data).success(updated);
    };


});


appDistrict.controller('deletedistrict', function ($scope, districtRest, $location, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.value = $routeParams.id;
    toastr.success($scope.value);

    var finddistrict = function (data, status) {
        $scope.district = {};
        $scope.district = data;
        $scope.alldata = data;
    };

    districtRest.findonedistrict($scope.value).success(finddistrict);


    var district = function (data, status) {
        console.log(data);
        // $scope.find=data;
        if (data == "false") {
            $scope.demo = "No data found";
            $scope.visibletable = false;

        } else {
            $scope.find = data;
        }
    };
    districtRest.find().success(district);


    ondelete = function (data, status) {
        toastr.success("District Deleted");
        $location.url("/district");
        districtRest.find().success(district);
    };


    $scope.delete = function () {
        // $scope.usermessage=id;
        districtRest.deletedistrict($scope.value).success(ondelete);
    };

});