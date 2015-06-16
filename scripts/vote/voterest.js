var voteRest = angular.module('voteRest', [])



.factory('voteRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/vote/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/vote/find");
        },
        findonevote: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/vote/findone?id="+id,{})
        },
        deletevote: function(id){
            return $http.get(apiurl+"/index.php/vote/delete?id="+id,{});
        },
        updatevote: function(data){
            return $http.get(apiurl+"/index.php/vote/update",{params:data});
        }
    }

});