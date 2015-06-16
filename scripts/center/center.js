var appCenter = angular.module('appCenter', ['centerRest', 'ngRoute']);

appCenter.controller('center',
  function ($scope,centerRest) {
      $scope.demo="";
      var centersuccess=function(data,status){
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
      centerRest.find().success(centersuccess);
      
     
});

appCenter.controller('createcenter',
  function ($scope,centerRest,$location) {
      $scope.demo="hello";
    var centercreated=function(data,status)
      {
        console.log(data);
        $location.url("/center");
      }
    
      
      $scope.create=function(data)
      {
          centerRest.create(data).success(centercreated);
      };
      });

appCenter.controller('editcenter',
    function ($scope, centerRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findcenter = function (data, status) {
            $scope.center = {};
            $scope.center = data;
            console.log(data);
           // $scope.alldata = data;
        };

        centerRest.findonecenter($scope.value).success(findcenter);

        
        var center = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        centerRest.find().success(center);
        
        var updated = function (data, status) {
             centerRest.find().success(center);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/center");
            toastr.success("center Updated");
        };


        $scope.update = function (data) {
            centerRest.updatecenter(data).success(updated);
        };


    });

appCenter.controller('deletecenter',
    function ($scope, centerRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findcenter = function (data, status) {
            $scope.center = {};
            $scope.center = data;
            $scope.center = data;
        };

        centerRest.findonecenter($scope.value).success(findcenter);

        
        var center = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        centerRest.find().success(center);
        
        
        ondelete=function(data,status) {
          toastr.success("center Deleted");
            $location.url("/center");
        centerRest.find().success(center);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        centerRest.deletecenter($scope.value).success(ondelete);
      };

    });