var appRegion = angular.module('appRegion', ['regionRest', 'ngRoute']);

appRegion.controller('region',
  function ($scope,regionRest) {
      $scope.demo="";
      var regionsuccess=function(data,status){
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
      regionRest.find().success(regionsuccess);
      
     
});

appRegion.controller('createregion',
  function ($scope,regionRest,$location) {
      $scope.demo="hello";
    var regioncreated=function(data,status)
      {
        console.log(data);
        $location.url("/region");
      }
    
      
      $scope.create=function(data)
      {
          regionRest.create(data).success(regioncreated);
      };
      });

appRegion.controller('editregion',
    function ($scope, regionRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findregion = function (data, status) {
            $scope.region = {};
            $scope.region = data;
            console.log(data);
           // $scope.alldata = data;
        };

        regionRest.findoneregion($scope.value).success(findregion);

        
        var region = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        regionRest.find().success(region);
        
        var updated = function (data, status) {
             regionRest.find().success(region);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/region");
            toastr.success("region Updated");
        };


        $scope.update = function (data) {
            regionRest.updateregion(data).success(updated);
        };


    });

appRegion.controller('deleteregion',
    function ($scope, regionRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findregion = function (data, status) {
            $scope.region = {};
            $scope.region = data;
            $scope.region = data;
        };

        regionRest.findoneregion($scope.value).success(findregion);

        
        var region = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        regionRest.find().success(region);
        
        
        ondelete=function(data,status) {
          toastr.success("region Deleted");
            $location.url("/region");
        regionRest.find().success(region);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        regionRest.deleteregion($scope.value).success(ondelete);
      };

    });