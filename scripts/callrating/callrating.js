var appCallrating = angular.module('appCallrating', ['callratingRest', 'ngRoute']);

appCallrating.controller('callrating',
  function ($scope,callratingRest) {
      $scope.demo="";
      var callratingsuccess=function(data,status){
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
      callratingRest.find().success(callratingsuccess);
      
     
});

appCallrating.controller('createcallrating',
  function ($scope,callratingRest,$location) {
      $scope.demo="hello";
    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     callratingRest.finduser().success(user);
    
    
    var callratingcreated=function(data,status)
      {
        console.log(data);
        $location.url("/callrating");
      }
    
      
      $scope.create=function(data)
      {
          console.log(data);
          callratingRest.create(data).success(callratingcreated);
      };
      });

appCallrating.controller('editcallrating',
    function ($scope, callratingRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     callratingRest.finduser().success(user);
    
        var findcallrating = function (data, status) {
            $scope.callrating = {};
            $scope.callrating = data;
            $scope.callrating.user=$scope.callrating.user.id;
            console.log(data);
           // $scope.alldata = data;
        };

        callratingRest.findonecallrating($scope.value).success(findcallrating);

        
        var callrating = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        callratingRest.find().success(callrating);
        
        var updated = function (data, status) {
             callratingRest.find().success(callrating);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/callrating");
            toastr.success("callrating Updated");
        };


        $scope.update = function (data) {
            callratingRest.updatecallrating(data).success(updated);
        };


    });

appCallrating.controller('deletecallrating',
    function ($scope, callratingRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     callratingRest.finduser().success(user);
    
        var findcallrating = function (data, status) {
            $scope.callrating = {};
            $scope.callrating = data;
            $scope.callrating.user=$scope.callrating.user.id;
            $scope.alldata = data;
        };

        callratingRest.findonecallrating($scope.value).success(findcallrating);

        
        var callrating = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        callratingRest.find().success(callrating);
        
        
        ondelete=function(data,status) {
          toastr.success("callrating Deleted");
            $location.url("/callrating");
        callratingRest.find().success(callrating);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        callratingRest.deletecallrating($scope.value).success(ondelete);
      };

    });