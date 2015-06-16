var appScheduler = angular.module('appScheduler', ['schedulerRest', 'ngRoute']);

appScheduler.controller('scheduler',
  function ($scope,schedulerRest) {
      $scope.demo="";
      var schedulersuccess=function(data,status){
          console.log(data);
          if(data=="false")
          {
              $scope.usermessage="No data found";
              $scope.visibletable=false;
            
          }
          else
          {
              
              $scope.visibletable=true;
              $scope.find=data;
          }
      };
     schedulerRest.find().success(schedulersuccess);
      
     
});

appScheduler.controller('createscheduler',
  function ($scope,schedulerRest,$location) {
      $scope.demo="hello";
    var schedulercreated=function(data,status)
      {
        console.log(data);
        $location.url("/scheduler");
      }
    
      
      $scope.create=function(data)
      {
          schedulerRest.create(data).success(schedulercreated);
      };
      });

appScheduler.controller('editscheduler',
    function ($scope, schedulerRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findscheduler = function (data, status) {
            $scope.scheduler = {};
            $scope.scheduler = data;
            console.log(data);
           // $scope.alldata = data;
        };

        schedulerRest.findonescheduler($scope.value).success(findscheduler);

        
        var scheduler = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        schedulerRest.find().success(scheduler);
        
        var updated = function (data, status) {
             schedulerRest.find().success(scheduler);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/scheduler");
            toastr.success("Scheduler Updated");
        };


        $scope.update = function (data) {
            schedulerRest.updatescheduler(data).success(updated);
        };


    });

appScheduler.controller('deletescheduler',
    function ($scope, schedulerRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findscheduler = function (data, status) {
            $scope.scheduler = {};
            $scope.scheduler = data;
            $scope.alldata = data;
        };

        schedulerRest.findonescheduler($scope.value).success(findscheduler);

        
        var scheduler = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        schedulerRest.find().success(scheduler);
        
        
        ondelete=function(data,status) {
          toastr.success("scheduler Deleted");
            $location.url("/scheduler");
        schedulerRest.find().success(scheduler);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        schedulerRest.deletescheduler($scope.value).success(ondelete);
      };

    });