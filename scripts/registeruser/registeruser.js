var appRegisteruser = angular.module('appRegisteruser', ['registeruserRest', 'ngRoute']);

appRegisteruser.controller('registeruser',
  function ($scope,registeruserRest) {
      $scope.demo="";
      var filtereddata=function(data,status){
        console.log(data);
          $scope.find=data;
      
      };
      $scope.filterdata=function(search)
      {
        registeruserRest.filter(search).success(filtereddata);
      };
      var registerusersuccess=function(data,status){
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
      registeruserRest.find().success(registerusersuccess);
      
     
});

appRegisteruser.controller('createregisteruser',
  function ($scope,registeruserRest,$location) {
      $scope.demo="hello";
    var registerusercreated=function(data,status)
      {
        console.log(data);
        $location.url("/registeruser");
      }
    
      
      $scope.create=function(data)
      {
          registeruserRest.create(data).success(registerusercreated);
      };
      });

appRegisteruser.controller('editregisteruser',
    function ($scope, registeruserRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findregisteruser = function (data, status) {
            $scope.registeruser = {};
            $scope.registeruser = data;
            console.log(data);
           // $scope.alldata = data;
        };

        registeruserRest.findoneregisteruser($scope.value).success(findregisteruser);

        
        var registeruser = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        registeruserRest.find().success(registeruser);
        
        var updated = function (data, status) {
             registeruserRest.find().success(registeruser);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/registeruser");
            toastr.success("registeruser Updated");
        };


        $scope.update = function (data) {
            registeruserRest.updateregisteruser(data).success(updated);
        };


    });

appRegisteruser.controller('deleteregisteruser',
    function ($scope, registeruserRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findregisteruser = function (data, status) {
            $scope.registeruser = {};
            $scope.registeruser = data;
            $scope.alldata = data;
        };

        registeruserRest.findoneregisteruser($scope.value).success(findregisteruser);

        
        var registeruser = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        registeruserRest.find().success(registeruser);
        
        
        ondelete=function(data,status) {
          toastr.success("registeruser Deleted");
            $location.url("/registeruser");
        registeruserRest.find().success(registeruser);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        registeruserRest.deleteregisteruser($scope.value).success(ondelete);
      };

    });