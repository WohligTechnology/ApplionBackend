var callratingRest = angular.module('callratingRest', [])



.factory('callratingRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"callrating",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"callrating");
        },
        finduser: function(){
            console.log();
            return $http.get(apiurl+"user");
        },
        findonecallrating: function(id){
            console.log();
            return $http.get(apiurl+"callrating/"+id)
        },
        deletecallrating: function(id){
            return $http.delete(apiurl+"callrating/"+id,{});
        },
        updatecallrating: function(data){
            return $http.put(apiurl+"callrating/"+data.id,data);
        }
    }

});