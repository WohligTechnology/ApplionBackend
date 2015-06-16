var appHolidayCalender = angular.module('appHolidayCalender', ['holidaycalenderRest', 'ngRoute']);

appHolidayCalender.controller('holidaycalender',
    function ($scope, holidaycalenderRest) {
        $scope.demo = "";
        var holidaycalender = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.data99 = data;
            if (data == "false") {
                $scope.holidaycalendermessage = "No data found";
                $scope.visibletable = false;

            } else {

                $scope.visibletable = true;
                $scope.find = data;
            }
        };
        holidaycalenderRest.find().success(holidaycalender);


    });

appHolidayCalender.controller('createholidaycalender',
    function ($scope, holidaycalenderRest, $location) {
        $scope.demo = "hello";

        //        var pincode = function (data, status) {
        //            console.log(data);
        //            // $scope.find=data;
        //            $scope.pincode = data;
        //        };
        //        holidaycalenderRest.findpincode().success(pincode);

        //        var holidaycalenderloaction = function (data, status) {
        //            console.log(data);
        //             $scope.find=data;
        //            $scope.holidaycalenderlocation = data;
        //        };
        //        holidaycalenderRest.findholidaycalenderlocation().success(holidaycalenderloaction);

        var holidaycalendercreated = function (data, status) {
            console.log(data);
            $location.url("/holidaycalender");
        }


        $scope.create = function (data) {
            console.log(data);
            holidaycalenderRest.create(data).success(holidaycalendercreated);
        };
    });

appHolidayCalender.controller('editholidaycalender',
    function ($scope, holidaycalenderRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
        var date1 = 1;
        $scope.holidaycalenderdate = [{
            id: date1++,
            date: ""
        }];

        $scope.addholiday = function () {
            $scope.holidaycalenderdate.push({
                id: date1++,
                date: ""
            });
        };
        $scope.removeholiday = function (i) {
            $scope.holidaycalenderdate.splice(i, 1);
        };
        $scope.pageview = 1;
        $scope.changepageview = function (num) {
            $scope.pageview = num;
        }

        //        var pincode = function (data, status) {
        //            console.log(data);
        //            // $scope.find=data;
        //            $scope.pincode = data;
        //
        //        };
        //        holidaycalenderRest.findpincode().success(pincode);

        //        var holidaycalenderloaction = function (data, status) {
        //            console.log(data);
        //             $scope.find=data;
        //            $scope.holidaycalenderlocation = data;
        //        };
        //        holidaycalenderRest.findholidaycalenderlocation().success(holidaycalenderloaction);



        var findholidaycalender = function (data, status) {
            $scope.holidaycalender = {};
            $scope.holidaycalender = data;
            console.log($scope.holidaycalenderdate);
            date1 = 1;
            $scope.holidaycalenderdate = [];
            _.each(data.datesofholiday, function (n) {
                $scope.holidaycalenderdate.push({
                    id: date1++,
                    date: new Date(n)
                });
            });
            //           
            $scope.alldata = data;
        };

        holidaycalenderRest.findoneholidaycalender($scope.value).success(findholidaycalender);


        var holidaycalender = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        holidaycalenderRest.find().success(holidaycalender);

        var updated = function (data, status) {
            holidaycalenderRest.find().success(holidaycalender);
            // $scope.visibletable = true;
            // $scope.updatearea = false;
            $location.url("/holidaycalender");
            toastr.success("Holiday Calender Updated");
        };


        $scope.update = function (data) {
            data.datesofholiday=[];
            _.each($scope.holidaycalenderdate, function (n) {
                data.datesofholiday.push(n.date);
            });
            holidaycalenderRest.updateholidaycalender(data).success(updated);
        };


    });


appHolidayCalender.controller('deleteholidaycalender',
    function ($scope, holidaycalenderRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);


//        var pincode = function (data, status) {
//            console.log(data);
//            // $scope.find=data;
//            $scope.pincode = data;
//
//        };
//        holidaycalenderRest.findpincode().success(pincode);
//
//        var holidaycalenderloaction = function (data, status) {
//            console.log(data);
//            // $scope.find=data;
//            $scope.holidaycalenderlocation = data;
//        };
//        holidaycalenderRest.findholidaycalenderlocation().success(holidaycalenderloaction);



        var findholidaycalender = function (data, status) {
            $scope.holidaycalender = {};
            $scope.holidaycalender = data;
            $scope.alldata = data;
        };

        holidaycalenderRest.findoneholidaycalender($scope.value).success(findholidaycalender);


        var holidaycalender = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        holidaycalenderRest.find().success(holidaycalender);


        ondelete = function (data, status) {
            toastr.success("Holiday Calender Deleted");
            $location.url("/holidaycalender");
            holidaycalenderRest.find().success(holidaycalender);
        };


        $scope.delete = function () {
            // $scope.holidaycalendermessage=id;
            holidaycalenderRest.deleteholidaycalender($scope.value).success(ondelete);
        };

    });