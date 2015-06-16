var appPosition = angular.module('appPosition', ['positionRest', 'ngRoute']);

appPosition.controller('position',
  function ($scope,positionRest) {
      $scope.demo="";
      var positionsuccess=function(data,status){
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
      positionRest.find().success(positionsuccess);
      
     
});

appPosition.controller('createposition',
  function ($scope,positionRest,$location) {
      $scope.demo="hello";
    var positioncreated=function(data,status)
      {
        console.log(data);
        $location.url("/position");
      }
    
      
      $scope.create=function(data)
      {
          positionRest.create(data).success(positioncreated);
      };
      });

appPosition.controller('editposition',
    function ($scope, positionRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findposition = function (data, status) {
            $scope.position = {};
            $scope.position = data;
            console.log(data);
           // $scope.alldata = data;
        };

        positionRest.findoneposition($scope.value).success(findposition);

        
        var position = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        positionRest.find().success(position);
        
        var updated = function (data, status) {
             positionRest.find().success(position);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/position");
            toastr.success("position Updated");
        };


        $scope.update = function (data) {
            positionRest.updateposition(data).success(updated);
        };


    });

appPosition.controller('deleteposition',
    function ($scope, positionRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findposition = function (data, status) {
            $scope.position = {};
            $scope.position = data;
            $scope.position = data;
        };

        positionRest.findoneposition($scope.value).success(findposition);

        
        var position = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        positionRest.find().success(position);
        
        
        ondelete=function(data,status) {
          toastr.success("position Deleted");
            $location.url("/position");
        positionRest.find().success(position);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        positionRest.deleteposition($scope.value).success(ondelete);
      };

    });