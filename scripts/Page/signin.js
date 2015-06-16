var appSignin = angular.module('appSignin', ['signinRest', 'ngRoute']);

appSignin.controller('signin',
  function ($scope,signinRest) {
      $scope.demo="";
      var signinsuccess=function(data,status){
          console.log(data);
          if(data=="false")
          {
              $scope.signinmessage="Wrong Username/Password";
              $scope.visibletable=false;
            
          }
          else
          {
              
              //$scope.visibletable=true;
              $scope.find=data;
          }
      };
      signinRest.find().success(signinsuccess);
      
     
});