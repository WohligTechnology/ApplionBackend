var regionRest = angular.module('regionRest', [])



.factory('regionRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/region/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/region/find");
        },
        findoneregion: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/region/findone?id="+id,{})
        },
        deleteregion: function(id){
            return $http.get(apiurl+"/index.php/region/delete?id="+id,{});
        },
        updateregion: function(data){
            return $http.get(apiurl+"/index.php/region/update",{params:data});
        }
    }

});