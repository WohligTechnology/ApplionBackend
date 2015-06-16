var mpconstituencyRest = angular.module('mpconstituencyRest', [])



.factory('mpconstituencyRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/mpconstituency/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/mpconstituency/find");
        },
        findonempconstituency: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/mpconstituency/findone?id="+id,{})
        },
        deletempconstituency: function(id){
            return $http.get(apiurl+"/index.php/mpconstituency/delete?id="+id,{});
        },
        updatempconstituency: function(data){
            return $http.get(apiurl+"/index.php/mpconstituency/update",{params:data});
        }
    }

});