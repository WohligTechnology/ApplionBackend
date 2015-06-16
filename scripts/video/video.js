var appVideo = angular.module('appVideo', ['videoRest', 'ngRoute']);

appVideo.controller('video',
  function ($scope,videoRest) {
      $scope.demo="";
      var videosuccess=function(data,status){
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
     videoRest.find().success(videosuccess);
      
     
});

appVideo.controller('createvideo',
  function ($scope,videoRest,$location) {
      $scope.demo="hello";
    var videocreated=function(data,status)
      {
        console.log(data);
        $location.url("/video");
      }
    
      
      $scope.create=function(data)
      {
          videoRest.create(data).success(videocreated);
      };
      });

appVideo.controller('editvideo',
    function ($scope, videoRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findvideo = function (data, status) {
            $scope.video = {};
            $scope.video = data;
            console.log(data);
           // $scope.alldata = data;
        };

        videoRest.findonevideo($scope.value).success(findvideo);

        
        var video = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        videoRest.find().success(video);
        
        var updated = function (data, status) {
             videoRest.find().success(video);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/video");
            toastr.success("video Updated");
        };


        $scope.update = function (data) {
            videoRest.updatevideo(data).success(updated);
        };


    });

appVideo.controller('deletevideo',
    function ($scope, videoRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findvideo = function (data, status) {
            $scope.video = {};
            $scope.video = data;
            $scope.alldata = data;
        };

        videoRest.findonevideo($scope.value).success(findvideo);

        
        var video = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        videoRest.find().success(video);
        
        
        ondelete=function(data,status) {
          toastr.success("video Deleted");
            $location.url("/video");
        videoRest.find().success(video);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        videoRest.deletevideo($scope.value).success(ondelete);
      };

    });