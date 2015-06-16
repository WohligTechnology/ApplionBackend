var appMlaconstituency = angular.module('appMlaconstituency', ['mlaconstituencyRest', 'ngRoute']);

appMlaconstituency.controller('mlaconstituency',
  function ($scope,mlaconstituencyRest) {
      $scope.demo="";
      var mlaconstituencysuccess=function(data,status){
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
      mlaconstituencyRest.find().success(mlaconstituencysuccess);
      
     
});

appMlaconstituency.controller('createmlaconstituency',
  function ($scope,mlaconstituencyRest,$location) {
      $scope.demo="hello";
    var mlaconstituencycreated=function(data,status)
      {
        console.log(data);
        $location.url("/mlaconstituency");
      }
    
      
      $scope.create=function(data)
      {
          mlaconstituencyRest.create(data).success(mlaconstituencycreated);
      };
      });

appMlaconstituency.controller('editmlaconstituency',
    function ($scope, mlaconstituencyRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findmlaconstituency = function (data, status) {
            $scope.mlaconstituency = {};
            $scope.mlaconstituency = data;
            console.log(data);
           // $scope.alldata = data;
        };

        mlaconstituencyRest.findonemlaconstituency($scope.value).success(findmlaconstituency);

        
        var mlaconstituency = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        mlaconstituencyRest.find().success(mlaconstituency);
        
        var updated = function (data, status) {
             mlaconstituencyRest.find().success(mlaconstituency);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/mlaconstituency");
            toastr.success("mlaconstituency Updated");
        };


        $scope.update = function (data) {
            mlaconstituencyRest.updatemlaconstituency(data).success(updated);
        };


    });

appMlaconstituency.controller('deletemlaconstituency',
    function ($scope, mlaconstituencyRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findmlaconstituency = function (data, status) {
            $scope.mlaconstituency = {};
            $scope.mlaconstituency = data;
            $scope.mlaconstituency = data;
        };

        mlaconstituencyRest.findonemlaconstituency($scope.value).success(findmlaconstituency);

        
        var mlaconstituency = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        mlaconstituencyRest.find().success(mlaconstituency);
        
        
        ondelete=function(data,status) {
          toastr.success("mlaconstituency Deleted");
            $location.url("/mlaconstituency");
        mlaconstituencyRest.find().success(mlaconstituency);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        mlaconstituencyRest.deletemlaconstituency($scope.value).success(ondelete);
      };

    });