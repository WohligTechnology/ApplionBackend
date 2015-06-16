var positionRest = angular.module('positionRest', [])



.factory('positionRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/position/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/position/find");
        },
        findoneposition: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/position/findone?id="+id,{})
        },
        deleteposition: function(id){
            return $http.get(apiurl+"/index.php/position/delete?id="+id,{});
        },
        updateposition: function(data){
            return $http.get(apiurl+"/index.php/position/update",{params:data});
        }
    }

});