var stateRest = angular.module('stateRest', [])



.factory('stateRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"state",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"state");
        },
        findcountry: function(){
            console.log();
            return $http.get(apiurl+"country");
        },
//        finduserlocation: function(){
//            console.log();
//            return $http.get(apiurl+"userlocation");
//        },
        findonestate: function(id){
            console.log();
            return $http.get(apiurl+"state/"+id)
        },
        deletestate: function(id){
            return $http.delete(apiurl+"state/"+id,{});
        },
        updatestate: function(data){
            return $http.put(apiurl+"state/"+data.id,data);
        }
    }

});