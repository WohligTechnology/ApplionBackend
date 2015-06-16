var appMembership = angular.module('appMembership', ['membershipRest', 'ngRoute']);

appMembership.controller('membership',
  function ($scope,membershipRest) {
      $scope.demo="";
      var membershipsuccess=function(data,status){
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
      membershipRest.find().success(membershipsuccess);
      
     
});

appMembership.controller('createmembership',
  function ($scope,membershipRest,$location) {
      $scope.demo="hello";
    var membershipcreated=function(data,status)
      {
        console.log(data);
        $location.url("/membership");
      }
    
      
      $scope.create=function(data)
      {
          membershipRest.create(data).success(membershipcreated);
      };
      });

appMembership.controller('editmembership',
    function ($scope, membershipRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findmembership = function (data, status) {
            $scope.membership = {};
            $scope.membership = data;
            console.log(data);
           // $scope.alldata = data;
        };

        membershipRest.findonemembership($scope.value).success(findmembership);

        
        var membership = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        membershipRest.find().success(membership);
        
        var updated = function (data, status) {
             membershipRest.find().success(membership);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/membership");
            toastr.success("membership Updated");
        };


        $scope.update = function (data) {
            console.log(data);
            membershipRest.updatemembership(data).success(updated);
        };


    });

appMembership.controller('deletemembership',
    function ($scope, membershipRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findmembership = function (data, status) {
            $scope.membership = {};
            $scope.membership = data;
            $scope.alldata = data;
        };

        membershipRest.findonemembership($scope.value).success(findmembership);

        
        var membership = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        membershipRest.find().success(membership);
        
        
        ondelete=function(data,status) {
          toastr.success("membership Deleted");
            $location.url("/membership");
        membershipRest.find().success(membership);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        membershipRest.deletemembership($scope.value).success(ondelete);
      };

    });