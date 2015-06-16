var videoRest = angular.module('videoRest', [])



.factory('videoRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/video/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/video/find");
        },
        findonevideo: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/video/findone?id="+id,{})
        },
        deletevideo: function(id){
            return $http.get(apiurl+"/index.php/video/delete?id="+id,{});
        },
        updatevideo: function(data){
            return $http.get(apiurl+"/index.php/video/update",{params:data});
        }
    }

});