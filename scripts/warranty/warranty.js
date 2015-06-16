var appWarranty = angular.module('appWarranty', ['warrantyRest', 'ngRoute']);

appWarranty.controller('warranty',
  function ($scope,warrantyRest) {
      $scope.demo="";
      var warranty=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.data99=data;
          if(data=="false")
          {
              $scope.warrantymessage="No data found";
              $scope.visibletable=false;
            
          }
          else
          {
              
              $scope.visibletable=true;
              $scope.find=data;
          }
      };
      warrantyRest.find().success(warranty);
      
     
});

appWarranty.controller('createwarranty',
  function ($scope,warrantyRest,$location) {
      $scope.demo="hello";
    
      var store=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.store=data;
      };
     warrantyRest.findstore().success(store);
    
    var warrantycreated=function(data,status)
      {
        console.log(data);
        $location.url("/warranty");
      }
    
      
      $scope.create=function(data)
      {
          console.log(data);
          warrantyRest.create(data).success(warrantycreated);
      };
      });

appWarranty.controller('editwarranty',
    function ($scope, warrantyRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

    
      var store=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.store=data;
          
      };
     warrantyRest.findstore().success(store);
    
    
    
        var findwarranty = function (data, status) {
            $scope.warranty = {};
            $scope.warranty = data;
            $scope.warranty.store=$scope.warranty.store.id;
            $scope.warranty.expiry=moment($scope.warranty.expiry).format('YYYY-MM-DD');
            console.log($scope.warranty.expiry);
//                $scope.warranty.store.id;
            $scope.alldata = data;
        };

        warrantyRest.findonewarranty($scope.value).success(findwarranty);

        
        var warranty = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        warrantyRest.find().success(warranty);
        
        var updated = function (data, status) {
             warrantyRest.find().success(warranty);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/warranty");
            toastr.success("warranty Updated");
        };


        $scope.update = function (data) {
            warrantyRest.updatewarranty(data).success(updated);
        };


    });


appWarranty.controller('deletewarranty',
    function ($scope, warrantyRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

    
      var store=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.store=data;
          
      };
     warrantyRest.findstore().success(store);
    
    
        var findwarranty = function (data, status) {
            $scope.warranty = {};
            $scope.warranty = data;
            $scope.warranty.expiry=moment($scope.warranty.expiry).format('YYYY-MM-DD');
            $scope.alldata = data;
        };

        warrantyRest.findonewarranty($scope.value).success(findwarranty);

        
        var warranty = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        warrantyRest.find().success(warranty);
        
        
        ondelete=function(data,status) {
          toastr.success("warranty Deleted");
            $location.url("/warranty");
        warrantyRest.find().success(warranty);  
      };
      
      
      $scope.delete=function(){
         // $scope.warrantymessage=id;
        warrantyRest.deletewarranty($scope.value).success(ondelete);
      };

    });