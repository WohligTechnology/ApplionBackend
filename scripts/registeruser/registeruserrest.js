var registeruserRest = angular.module('registeruserRest', [])



.factory('registeruserRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/registration/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/registration/find");
        },
        findoneregisteruser: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/registration/findone?id="+id,{})
        },
        deleteregisteruser: function(id){
            return $http.get(apiurl+"/index.php/registration/delete?id="+id,{});
        },
        updateregisteruser: function(data){
            return $http.get(apiurl+"/index.php/registration/update",{params:data});
        },
        filter: function(data){
            return $http.get(apiurl+"/index.php/registration/filterdata",{params:data});
        }
    }

});