var appFeedback = angular.module('appFeedback', ['feedbackRest', 'ngRoute']);

appFeedback.controller('feedback',
  function ($scope,feedbackRest) {
      $scope.demo="";
      var feedbacksuccess=function(data,status){
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
      feedbackRest.find().success(feedbacksuccess);
      
     
});

appFeedback.controller('createfeedback',
  function ($scope,feedbackRest,$location) {
      $scope.demo="hello";
    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     feedbackRest.finduser().success(user);
    
    
    var feedbackcreated=function(data,status)
      {
        console.log(data);
        $location.url("/feedback");
      }
    
      
      $scope.create=function(data)
      {
          console.log(data);
          feedbackRest.create(data).success(feedbackcreated);
      };
      });

appFeedback.controller('editfeedback',
    function ($scope, feedbackRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     feedbackRest.finduser().success(user);
    
        var findfeedback = function (data, status) {
            $scope.feedback = {};
            $scope.feedback = data;
            $scope.feedback.user=$scope.feedback.user.id;
            console.log(data);
           // $scope.alldata = data;
        };

        feedbackRest.findonefeedback($scope.value).success(findfeedback);

        
        var feedback = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        feedbackRest.find().success(feedback);
        
        var updated = function (data, status) {
             feedbackRest.find().success(feedback);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/feedback");
            toastr.success("feedback Updated");
        };


        $scope.update = function (data) {
            feedbackRest.updatefeedback(data).success(updated);
        };


    });

appFeedback.controller('deletefeedback',
    function ($scope, feedbackRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     feedbackRest.finduser().success(user);
    
        var findfeedback = function (data, status) {
            $scope.feedback = {};
            $scope.feedback = data;
            $scope.feedback.user=$scope.feedback.user.id;
            $scope.alldata = data;
        };

        feedbackRest.findonefeedback($scope.value).success(findfeedback);

        
        var feedback = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        feedbackRest.find().success(feedback);
        
        
        ondelete=function(data,status) {
          toastr.success("feedback Deleted");
            $location.url("/feedback");
        feedbackRest.find().success(feedback);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        feedbackRest.deletefeedback($scope.value).success(ondelete);
      };

    });