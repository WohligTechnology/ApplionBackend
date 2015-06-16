var appArticle = angular.module('appArticle', ['articleRest', 'ngRoute']);

appArticle.controller('article',
  function ($scope,articleRest) {
      $scope.demo="";
      var articlesuccess=function(data,status){
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
      articleRest.find().success(articlesuccess);
      
     
});

appArticle.controller('createarticle',
  function ($scope,articleRest,$location) {
      $scope.demo="hello";
    var articlecreated=function(data,status)
      {
        console.log(data);
        $location.url("/article");
      }
    
      
      $scope.create=function(data)
      {
          articleRest.create(data).success(articlecreated);
      };
      });

appArticle.controller('editarticle',
    function ($scope, articleRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findarticle = function (data, status) {
            $scope.article = {};
            $scope.article = data;
            console.log(data);
           // $scope.alldata = data;
        };

        articleRest.findonearticle($scope.value).success(findarticle);

        
        var article = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        articleRest.find().success(article);
        
        var updated = function (data, status) {
             articleRest.find().success(article);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/article");
            toastr.success("Article Updated");
        };


        $scope.update = function (data) {
            articleRest.updatearticle(data).success(updated);
        };


    });

appArticle.controller('deletearticle',
    function ($scope, articleRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findarticle = function (data, status) {
            $scope.article = {};
            $scope.article = data;
            $scope.alldata = data;
        };

        articleRest.findonearticle($scope.value).success(findarticle);

        
        var article = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        articleRest.find().success(article);
        
        
        ondelete=function(data,status) {
          toastr.success("Article Deleted");
            $location.url("/article");
        articleRest.find().success(article);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        articleRest.deletearticle($scope.value).success(ondelete);
      };

    });