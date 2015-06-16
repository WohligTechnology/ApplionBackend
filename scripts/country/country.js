var appCountry = angular.module('appCountry', ['countryRest', 'ngRoute']);

appCountry.controller('country', function ($scope, countryRest) {
    $scope.demo = "";
    var country = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.data99 = data;
        if (data == "false") {
            $scope.countrymessage = "No data found";
            $scope.visibletable = false;

        } else {

            $scope.visibletable = true;
            $scope.find = data;
        }
    };
    countryRest.find().success(country);


});

appCountry.controller('createcountry', function ($scope, countryRest, $location) {
    $scope.demo = "hello";
//    var country = function (data, status) {
//        console.log(data);
//        // $scope.find=data;
//        $scope.country = data;
//    };
//    countryRest.findcountry().success(country);

    //      var userloaction=function(data,status){
    //          console.log(data);
    //          // $scope.find=data;
    //          $scope.userlocation=data;
    //      };
    //     countryRest.finduserlocation().success(userloaction);

    var countrycreated = function (data, status) {
        console.log(data);
        $location.url("/country");
    }
    $scope.create = function (data) {
        console.log(data);
        countryRest.create(data).success(countrycreated);
    };
});

appCountry.controller('editcountry', function ($scope, countryRest, $location, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.value = $routeParams.id;
    toastr.success($scope.value);


//    var country = function (data, status) {
//        console.log(data);
//        // $scope.find=data;
//        $scope.country = data;
//
//    };
//    countryRest.findcountry().success(country);

    //      var userloaction=function(data,status){
    //          console.log(data);
    //          // $scope.find=data;
    //          $scope.userlocation=data;
    //      };
    //     countryRest.finduserlocation().success(userloaction);
    //    


    var findcountry = function (data, status) {
        $scope.country = {};
        $scope.country = data;
        $scope.country.country = $scope.country.country.id;
        //            $scope.user.dob=moment($scope.user.dob).format('YYYY-MM-DD');
        //            $scope.user.dob=$filter('date')($scope.user.date, "dd/MM/yyyy");
        //            console.log($scope.user.dob);
        //                $scope.user.country.id;
        $scope.alldata = data;
    };

    countryRest.findonecountry($scope.value).success(findcountry);


    var country = function (data, status) {
        console.log(data);
        if (data == "false") {
            $scope.demo = "No data found";
            $scope.visibletable = false;

        } else {
            $scope.find = data;
        }
    };
    countryRest.find().success(country);

    var updated = function (data, status) {
        countryRest.find().success(country);
        // $scope.visibletable = true;
        // $scope.updatearea = false;
        $location.url("/country");
        toastr.success("Country Updated");
    };
    $scope.update = function (data) {
        countryRest.updatecountry(data).success(updated);
    };


});


appCountry.controller('deletecountry', function ($scope, countryRest, $location, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.value = $routeParams.id;
    toastr.success($scope.value);

    var findcountry = function (data, status) {
        $scope.country = {};
        $scope.country= data;
        $scope.alldata = data;
    };

    countryRest.findonecountry($scope.value).success(findcountry);


    var country = function (data, status) {
        console.log(data);
        // $scope.find=data;
        if (data == "false") {
            $scope.demo = "No data found";
            $scope.visibletable = false;

        } else {
            $scope.find = data;
        }
    };
    countryRest.find().success(country);


    ondelete = function (data, status) {
        toastr.success("Country Deleted");
        $location.url("/country");
        countryRest.find().success(country);
    };


    $scope.delete = function () {
        // $scope.usermessage=id;
        countryRest.deletecountry($scope.value).success(ondelete);
    };

});