var applianceRest = angular.module('applianceRest', [])



.factory('applianceRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"appliance",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"appliance");
        },
        findappliancetype: function(){
            console.log();
            return $http.get(apiurl+"appliancetype");
        },
        findbrand: function(){
            console.log();
            return $http.get(apiurl+"brand");
        },
        finduser: function(){
            console.log();
            return $http.get(apiurl+"user");
        },
        findstore: function(){
            console.log();
            return $http.get(apiurl+"store");
        },
        findoneappliance: function(id){
            console.log();
            return $http.get(apiurl+"appliance/"+id)
        },
        deleteappliance: function(id){
            return $http.delete(apiurl+"appliance/"+id,{});
        },
        updateappliance: function(data){
            return $http.put(apiurl+"appliance/"+data.id,data);
        }
    }

});