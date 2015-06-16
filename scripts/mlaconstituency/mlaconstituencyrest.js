var mlaconstituencyRest = angular.module('mlaconstituencyRest', [])



.factory('mlaconstituencyRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/mlaconstituency/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/mlaconstituency/find");
        },
        findonemlaconstituency: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/mlaconstituency/findone?id="+id,{})
        },
        deletemlaconstituency: function(id){
            return $http.get(apiurl+"/index.php/mlaconstituency/delete?id="+id,{});
        },
        updatemlaconstituency: function(data){
            return $http.get(apiurl+"/index.php/mlaconstituency/update",{params:data});
        }
    }

});