var appLogin = angular.module('appLogin', ['loginRest', 'ngRoute']);

appLogin.controller('login',
  function ($scope,loginRest) {
      $scope.demo="";
      
      
      
      
//      var loginsuccess=function(data,status){
//          console.log(data);
//          if(data=="false")
//          {
//              $scope.usermessage="No data found";
//              $scope.visibletable=false;
//            
//          }
//          else
//          {
//              
//              $scope.visibletable=true;
//              $scope.find=data;
//          }
//      };
//      loginRest.find().success(loginsuccess);
      
     $scope.demo="hello";
    var logincreated=function(data,status)
      {
        console.log(data);
        $location.url("/login");
      }
    
      
      $scope.create=function(data)
      {
          loginRest.create(data).success(logincreated);
      };
});

appLogin.controller('createlogin',
  function ($scope,loginRest,$location) {
      $scope.demo="hello";
    var logincreated=function(data,status)
      {
        console.log(data);
        $location.url("/login");
      }
    
      
      $scope.create=function(data)
      {
          loginRest.create(data).success(logincreated);
      };
      });

appLogin.controller('editlogin',
    function ($scope, loginRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findlogin = function (data, status) {
            $scope.login = {};
            $scope.login = data;
            console.log(data);
           // $scope.alldata = data;
        };

        loginRest.findonelogin($scope.value).success(findlogin);

        
        var login = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        loginRest.find().success(login);
        
        var updated = function (data, status) {
             loginRest.find().success(login);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/login");
            toastr.success("login Updated");
        };


        $scope.update = function (data) {
            console.log(data);
            loginRest.updatelogin(data).success(updated);
        };


    });

appLogin.controller('deletelogin',
    function ($scope, loginRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findlogin = function (data, status) {
            $scope.login = {};
            $scope.login = data;
            $scope.alldata = data;
        };

        loginRest.findonelogin($scope.value).success(findlogin);

        
        var login = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        loginRest.find().success(login);
        
        
        ondelete=function(data,status) {
          toastr.success("login Deleted");
            $location.url("/login");
        loginRest.find().success(login);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        loginRest.deletelogin($scope.value).success(ondelete);
      };

    });