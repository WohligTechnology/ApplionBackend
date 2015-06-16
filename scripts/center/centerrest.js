var centerRest = angular.module('centerRest', [])



.factory('centerRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get("http://localhost/politicianbackend/politician/index.php/center/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get("http://localhost/politicianbackend/politician/index.php/center/find");
        },
        findonecenter: function(id){
            console.log();
            return $http.get("http://localhost/politicianbackend/politician/index.php/center/findone?id="+id,{})
        },
        deletecenter: function(id){
            return $http.get("http://localhost/politicianbackend/politician/index.php/center/delete?id="+id,{});
        },
        updatecenter: function(data){
            return $http.get("http://localhost/politicianbackend/politician/index.php/center/update",{params:data});
        }
    }

});