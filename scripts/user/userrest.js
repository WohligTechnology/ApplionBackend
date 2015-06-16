var userRest = angular.module('userRest', [])



.factory('userRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"user/createuser",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"user");
        },
        findcountry: function(){
            console.log();
            return $http.get(apiurl+"country");
        },
        finduserlocation: function(){
            console.log();
            return $http.get(apiurl+"userlocation");
        },
        findoneuser: function(id){
            console.log(id);
            return $http.get(apiurl+"user/"+id)
        },
        deleteuser: function(id){
            return $http.delete(apiurl+"user/"+id,{});
        },
        updateuser: function(data){
            return $http.put(apiurl+"user/updateuser/"+data.id,data);
        }
    }

});