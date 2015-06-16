var appVote = angular.module('appVote', ['voteRest', 'ngRoute']);

appVote.controller('vote',
  function ($scope,voteRest) {
      $scope.demo="";
      var votesuccess=function(data,status){
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
      voteRest.find().success(votesuccess);
      
     
});

appVote.controller('createvote',
  function ($scope,voteRest,$location) {
      $scope.demo="hello";
    var votecreated=function(data,status)
      {
        console.log(data);
        $location.url("/vote");
      }
    
      
      $scope.create=function(data)
      {
          voteRest.create(data).success(votecreated);
      };
      });

appVote.controller('editvote',
    function ($scope, voteRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findvote = function (data, status) {
            $scope.vote = {};
            $scope.vote = data;
            console.log(data);
           // $scope.alldata = data;
        };

        voteRest.findonevote($scope.value).success(findvote);

        
        var vote = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        voteRest.find().success(vote);
        
        var updated = function (data, status) {
             voteRest.find().success(vote);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/vote");
            toastr.success("vote Updated");
        };


        $scope.update = function (data) {
            voteRest.updatevote(data).success(updated);
        };


    });

appVote.controller('deletevote',
    function ($scope, voteRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findvote = function (data, status) {
            $scope.vote = {};
            $scope.vote = data;
            $scope.vote = data;
        };

        voteRest.findonevote($scope.value).success(findvote);

        
        var vote = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        voteRest.find().success(vote);
        
        
        ondelete=function(data,status) {
          toastr.success("vote Deleted");
            $location.url("/vote");
        voteRest.find().success(vote);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        voteRest.deletevote($scope.value).success(ondelete);
      };

    });