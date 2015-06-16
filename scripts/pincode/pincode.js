var appPincode = angular.module('appPincode', ['pincodeRest', 'ngRoute']);

appPincode.controller('pinCode', function ($scope, pincodeRest) {
    $scope.demo = "";
    var pincode = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.data99 = data;
        if (data == "false") {
            $scope.pincodemessage = "No data found";
            $scope.visibletable = false;

        } else {

            $scope.visibletable = true;
            $scope.find = data;
        }
    };
    pincodeRest.find().success(pincode);


});

appPincode.controller('createPincode', function ($scope, pincodeRest, $location) {
    $scope.demo = "hello";
    var district = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.district = data;
    };
    pincodeRest.finddistrict().success(district);

    //      var userloaction=function(data,status){
    //          console.log(data);
    //          // $scope.find=data;
    //          $scope.userlocation=data;
    //      };
    //     pincodeRest.finduserlocation().success(userloaction);

    var pincodecreated = function (data, status) {
        console.log(data);
        $location.url("/pincode");
    }
    $scope.create = function (data) {
        console.log(data);
        pincodeRest.create(data).success(pincodecreated);
    };
});

appPincode.controller('editpincode', function ($scope, pincodeRest, $location, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.value = $routeParams.id;
    toastr.success($scope.value);


    var district = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.district = data;

    };
    pincodeRest.finddistrict().success(district);

    //      var userloaction=function(data,status){
    //          console.log(data);
    //          // $scope.find=data;
    //          $scope.userlocation=data;
    //      };
    //     pincodeRest.finduserlocation().success(userloaction);
    //    


    var findpincode = function (data, status) {
        $scope.pincode = {};
        $scope.pincode = data;
        $scope.pincode.district = $scope.pincode.district.id;
        //            $scope.user.dob=moment($scope.user.dob).format('YYYY-MM-DD');
        //            $scope.user.dob=$filter('date')($scope.user.date, "dd/MM/yyyy");
        //            console.log($scope.user.dob);
        //                $scope.user.pincode.id;
        $scope.alldata = data;
    };

    pincodeRest.findonepincode($scope.value).success(findpincode);


    var pincode = function (data, status) {
        console.log(data);
        if (data == "false") {
            $scope.demo = "No data found";
            $scope.visibletable = false;

        } else {
            $scope.find = data;
        }
    };
    pincodeRest.find().success(pincode);

    var updated = function (data, status) {
        pincodeRest.find().success(pincode);
        // $scope.visibletable = true;
        // $scope.updatearea = false;
        $location.url("/pincode");
        toastr.success("Pincode Updated");
    };
    $scope.update = function (data) {
        pincodeRest.updatepincode(data).success(updated);
    };


});


appPincode.controller('deletepincode', function ($scope, pincodeRest, $location, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.value = $routeParams.id;
    toastr.success($scope.value);

    var findpincode = function (data, status) {
        $scope.pincode = {};
        $scope.pincode = data;
        $scope.alldata = data;
    };

    pincodeRest.findonepincode($scope.value).success(findpincode);


    var pincode = function (data, status) {
        console.log(data);
        // $scope.find=data;
        if (data == "false") {
            $scope.demo = "No data found";
            $scope.visibletable = false;

        } else {
            $scope.find = data;
        }
    };
    pincodeRest.find().success(pincode);


    ondelete = function (data, status) {
        toastr.success("Pincode Deleted");
        $location.url("/pincode");
        pincodeRest.find().success(pincode);
    };


    $scope.delete = function () {
        // $scope.usermessage=id;
        pincodeRest.deletepincode($scope.value).success(ondelete);
    };

});