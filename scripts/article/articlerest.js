var articleRest = angular.module('articleRest', [])



.factory('articleRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/article/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/article/find");
        },
        findonearticle: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/article/findone?id="+id,{})
        },
        deletearticle: function(id){
            return $http.get(apiurl+"/index.php/article/delete?id="+id,{});
        },
        updatearticle: function(data){
            return $http.get(apiurl+"/index.php/article/update",{params:data});
        }
    }

});