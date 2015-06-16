var appRating = angular.module('appRating', ['ratingRest', 'ngRoute']);

appRating.controller('rating',
  function ($scope,ratingRest) {
      $scope.demo="";
      var ratingsuccess=function(data,status){
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
      ratingRest.find().success(ratingsuccess);
      
     
});

appRating.controller('createrating',
  function ($scope,ratingRest,$location) {
      $scope.demo="hello";
    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     ratingRest.finduser().success(user);
    
    
    var ratingcreated=function(data,status)
      {
        console.log(data);
        $location.url("/rating");
      }
    
      
      $scope.create=function(data)
      {
          console.log(data);
          ratingRest.create(data).success(ratingcreated);
      };
      });

appRating.controller('editrating',
    function ($scope, ratingRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     ratingRest.finduser().success(user);
    
        var findrating = function (data, status) {
            $scope.rating = {};
            $scope.rating = data;
            $scope.rating.user=$scope.rating.user.id;
            console.log(data);
           // $scope.alldata = data;
        };

        ratingRest.findonerating($scope.value).success(findrating);

        
        var rating = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        ratingRest.find().success(rating);
        
        var updated = function (data, status) {
             ratingRest.find().success(rating);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/rating");
            toastr.success("rating Updated");
        };


        $scope.update = function (data) {
            ratingRest.updaterating(data).success(updated);
        };


    });

appRating.controller('deleterating',
    function ($scope, ratingRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     ratingRest.finduser().success(user);
    
        var findrating = function (data, status) {
            $scope.rating = {};
            $scope.rating = data;
            $scope.rating.user=$scope.rating.user.id;
            $scope.alldata = data;
        };

        ratingRest.findonerating($scope.value).success(findrating);

        
        var rating = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        ratingRest.find().success(rating);
        
        
        ondelete=function(data,status) {
          toastr.success("rating Deleted");
            $location.url("/rating");
        ratingRest.find().success(rating);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        ratingRest.deleterating($scope.value).success(ondelete);
      };

    });