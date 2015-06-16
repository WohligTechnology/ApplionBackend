var loginRest = angular.module('loginRest', [])



.factory('loginRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/login/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/login/find");
        },
        findonelogin: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/login/findone?id="+id,{})
        },
        deletelogin: function(id){
            return $http.get(apiurl+"/index.php/login/delete?id="+id,{});
        },
        updatelogin: function(data){
            return $http.get(apiurl+"/index.php/login/update",{params:data});
        }
    }

});