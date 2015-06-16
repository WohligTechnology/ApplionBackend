var appUpload = angular.module('appUpload', ['uploadRest', 'ngRoute']);

appUpload.controller('upload',
  function ($scope,uploadRest) {
      $scope.demo="";
      var uploadsuccess=function(data,status){
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
      uploadRest.find().success(uploadsuccess);
      
     
});

appUpload.controller('createupload',
  function ($scope,uploadRest,$location) {
      $scope.demo="hello";
    var uploadcreated=function(data,status)
      {
        console.log(data);
        $location.url("/upload");
      }
    
      
      $scope.create=function(data)
      {
          uploadRest.create(data).success(uploadcreated);
      };
      });

appUpload.controller('editupload',
    function ($scope, uploadRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findupload = function (data, status) {
            $scope.upload = {};
            $scope.upload = data;
            console.log(data);
           // $scope.alldata = data;
        };

        uploadRest.findoneupload($scope.value).success(findupload);

        
        var upload = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        uploadRest.find().success(upload);
        
        var updated = function (data, status) {
             uploadRest.find().success(upload);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/upload");
            toastr.success("upload Updated");
        };


        $scope.update = function (data) {
            uploadRest.updateupload(data).success(updated);
        };


    });

appUpload.controller('deleteupload',
    function ($scope, uploadRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findupload = function (data, status) {
            $scope.upload = {};
            $scope.upload = data;
            $scope.upload = data;
        };

        uploadRest.findoneupload($scope.value).success(findupload);

        
        var upload = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        uploadRest.find().success(upload);
        
        
        ondelete=function(data,status) {
          toastr.success("upload Deleted");
            $location.url("/upload");
        uploadRest.find().success(upload);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        uploadRest.deleteupload($scope.value).success(ondelete);
      };

    });