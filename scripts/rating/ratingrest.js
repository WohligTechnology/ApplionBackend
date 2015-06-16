var ratingRest = angular.module('ratingRest', [])



.factory('ratingRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"rating",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"rating");
        },
        finduser: function(){
            console.log();
            return $http.get(apiurl+"user");
        },
        findonerating: function(id){
            console.log();
            return $http.get(apiurl+"rating/"+id)
        },
        deleterating: function(id){
            return $http.delete(apiurl+"rating/"+id,{});
        },
        updaterating: function(data){
            return $http.put(apiurl+"rating/"+data.id,data);
        }
    }

});