var countryRest = angular.module('countryRest', [])



.factory('countryRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"country",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"country");
        },
//        findcountry: function(){
//            console.log();
//            return $http.get(apiurl+"country");
//        },
//        finduserlocation: function(){
//            console.log();
//            return $http.get(apiurl+"userlocation");
//        },
        findonecountry: function(id){
            console.log();
            return $http.get(apiurl+"country/"+id)
        },
        deletecountry: function(id){
            return $http.delete(apiurl+"country/"+id,{});
        },
        updatecountry: function(data){
            return $http.put(apiurl+"country/"+data.id,data);
        }
    }

});