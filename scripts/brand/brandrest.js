var brandRest = angular.module('brandRest', [])



.factory('brandRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"brand",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"brand");
        },
        findonebrand: function(id){
            console.log();
            return $http.get(apiurl+"brand/"+id)
        },
        deletebrand: function(id){
            return $http.delete(apiurl+"brand/"+id,{});
        },
        updatebrand: function(data){
            return $http.put(apiurl+"brand/"+data.id,data);
        }
    }

});