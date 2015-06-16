var appState = angular.module('appState', ['stateRest', 'ngRoute']);

appState.controller('state', function ($scope, stateRest) {
    $scope.demo = "";
    var state = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.data99 = data;
        if (data == "false") {
            $scope.statemessage = "No data found";
            $scope.visibletable = false;

        } else {

            $scope.visibletable = true;
            $scope.find = data;
        }
    };
    stateRest.find().success(state);


});

appState.controller('createstate', function ($scope, stateRest, $location) {
    $scope.demo = "hello";
    var country = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.country = data;
    };
    stateRest.findcountry().success(country);

    //      var userloaction=function(data,status){
    //          console.log(data);
    //          // $scope.find=data;
    //          $scope.userlocation=data;
    //      };
    //     stateRest.finduserlocation().success(userloaction);

    var statecreated = function (data, status) {
        console.log(data);
        $location.url("/state");
    }
    $scope.create = function (data) {
        console.log(data);
        stateRest.create(data).success(statecreated);
    };
});

appState.controller('editstate', function ($scope, stateRest, $location, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.value = $routeParams.id;
    toastr.success($scope.value);


    var country = function (data, status) {
        console.log(data);
        // $scope.find=data;
        $scope.country = data;

    };
    stateRest.findcountry().success(country);

    //      var userloaction=function(data,status){
    //          console.log(data);
    //          // $scope.find=data;
    //          $scope.userlocation=data;
    //      };
    //     stateRest.finduserlocation().success(userloaction);
    //    


    var findstate = function (data, status) {
        $scope.state = {};
        $scope.state = data;
        $scope.state.country = $scope.state.country.id;
        //            $scope.user.dob=moment($scope.user.dob).format('YYYY-MM-DD');
        //            $scope.user.dob=$filter('date')($scope.user.date, "dd/MM/yyyy");
        //            console.log($scope.user.dob);
        //                $scope.user.state.id;
        $scope.alldata = data;
    };

    stateRest.findonestate($scope.value).success(findstate);


    var state = function (data, status) {
        console.log(data);
        if (data == "false") {
            $scope.demo = "No data found";
            $scope.visibletable = false;

        } else {
            $scope.find = data;
        }
    };
    stateRest.find().success(state);

    var updated = function (data, status) {
        stateRest.find().success(state);
        // $scope.visibletable = true;
        // $scope.updatearea = false;
        $location.url("/state");
        toastr.success("State Updated");
    };
    $scope.update = function (data) {
        stateRest.updatestate(data).success(updated);
    };


});


appState.controller('deletestate', function ($scope, stateRest, $location, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.value = $routeParams.id;
    toastr.success($scope.value);

    var findstate = function (data, status) {
        $scope.state = {};
        $scope.state = data;
        $scope.alldata = data;
    };

    stateRest.findonestate($scope.value).success(findstate);


    var state = function (data, status) {
        console.log(data);
        // $scope.find=data;
        if (data == "false") {
            $scope.demo = "No data found";
            $scope.visibletable = false;

        } else {
            $scope.find = data;
        }
    };
    stateRest.find().success(state);


    ondelete = function (data, status) {
        toastr.success("State Deleted");
        $location.url("/state");
        stateRest.find().success(state);
    };


    $scope.delete = function () {
        // $scope.usermessage=id;
        stateRest.deletestate($scope.value).success(ondelete);
    };

});