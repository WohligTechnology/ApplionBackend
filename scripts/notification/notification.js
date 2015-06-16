var appNotification = angular.module('appNotification', ['notificationRest', 'ngRoute']);

appNotification.controller('notification',
  function ($scope,notificationRest) {
      $scope.demo="";
      var notificationsuccess=function(data,status){
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
      notificationRest.find().success(notificationsuccess);
      
     
});

appNotification.controller('createnotification',
  function ($scope,notificationRest,$location) {
      $scope.demo="hello";
    
    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     notificationRest.finduser().success(user);
    
    var notificationcreated=function(data,status)
      {
        console.log(data);
        $location.url("/notification");
      }
    
      
      $scope.create=function(data)
      {
          notificationRest.create(data).success(notificationcreated);
      };
      });

appNotification.controller('editnotification',
    function ($scope, notificationRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     notificationRest.finduser().success(user);
    
        var findnotification = function (data, status) {
            $scope.notification = {};
            $scope.notification = data;
            $scope.notification.user=$scope.notification.user.id;
            console.log(data);
           // $scope.alldata = data;
        };

        notificationRest.findonenotification($scope.value).success(findnotification);

        
        var notification = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        notificationRest.find().success(notification);
        
        var updated = function (data, status) {
             notificationRest.find().success(notification);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/notification");
            toastr.success("notification Updated");
        };


        $scope.update = function (data) {
            notificationRest.updatenotification(data).success(updated);
        };


    });

appNotification.controller('deletenotification',
    function ($scope, notificationRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     notificationRest.finduser().success(user);
    
        var findnotification = function (data, status) {
            $scope.notification = {};
            $scope.notification = data;
            $scope.notification = data;
            $scope.notification.user=$scope.notification.user.id;
        };

        notificationRest.findonenotification($scope.value).success(findnotification);

        
        var notification = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        notificationRest.find().success(notification);
        
        
        ondelete=function(data,status) {
          toastr.success("notification Deleted");
            $location.url("/notification");
        notificationRest.find().success(notification);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        notificationRest.deletenotification($scope.value).success(ondelete);
      };

    });