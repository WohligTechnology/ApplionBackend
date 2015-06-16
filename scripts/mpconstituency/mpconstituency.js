var appMpconstituency = angular.module('appMpconstituency', ['mpconstituencyRest', 'ngRoute']);

appMpconstituency.controller('mpconstituency',
  function ($scope,mpconstituencyRest) {
      $scope.demo="";
      var mpconstituencysuccess=function(data,status){
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
      mpconstituencyRest.find().success(mpconstituencysuccess);
      
     
});

appMpconstituency.controller('creatempconstituency',
  function ($scope,mpconstituencyRest,$location) {
      $scope.demo="hello";
    var mpconstituencycreated=function(data,status)
      {
        console.log(data);
        $location.url("/mpconstituency");
      }
    
      
      $scope.create=function(data)
      {
          mpconstituencyRest.create(data).success(mpconstituencycreated);
      };
      });

appMpconstituency.controller('editmpconstituency',
    function ($scope, mpconstituencyRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findmpconstituency = function (data, status) {
            $scope.mpconstituency = {};
            $scope.mpconstituency = data;
            console.log(data);
           // $scope.alldata = data;
        };

        mpconstituencyRest.findonempconstituency($scope.value).success(findmpconstituency);

        
        var mpconstituency = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        mpconstituencyRest.find().success(mpconstituency);
        
        var updated = function (data, status) {
             mpconstituencyRest.find().success(mpconstituency);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/mpconstituency");
            toastr.success("mpconstituency Updated");
        };


        $scope.update = function (data) {
            mpconstituencyRest.updatempconstituency(data).success(updated);
        };


    });

appMpconstituency.controller('deletempconstituency',
    function ($scope, mpconstituencyRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findmpconstituency = function (data, status) {
            $scope.mpconstituency = {};
            $scope.mpconstituency = data;
            $scope.mpconstituency = data;
        };

        mpconstituencyRest.findonempconstituency($scope.value).success(findmpconstituency);

        
        var mpconstituency = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        mpconstituencyRest.find().success(mpconstituency);
        
        
        ondelete=function(data,status) {
          toastr.success("mpconstituency Deleted");
            $location.url("/mpconstituency");
        mpconstituencyRest.find().success(mpconstituency);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        mpconstituencyRest.deletempconstituency($scope.value).success(ondelete);
      };

    });