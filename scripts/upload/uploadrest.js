var uploadRest = angular.module('uploadRest', [])



.factory('uploadRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/upload/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/upload/find");
        },
        findoneupload: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/upload/findone?id="+id,{})
        },
        deleteupload: function(id){
            return $http.get(apiurl+"/index.php/upload/delete?id="+id,{});
        },
        updateupload: function(data){
            return $http.get(apiurl+"/index.php/upload/update",{params:data});
        }
    }

});