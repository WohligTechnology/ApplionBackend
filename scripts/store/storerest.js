var storeRest = angular.module('storeRest', [])



.factory('storeRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"store",data);
        },
        findcountry: function(){
            console.log();
            return $http.get(apiurl+"country");
        },
        findholidaycalender: function(){
            console.log();
            return $http.get(apiurl+"holidaycalender");
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"store");
        },
        findbrand: function(){
            console.log();
            return $http.get(apiurl+"brand");
        },
        finduser: function(){
            console.log();
            return $http.get(apiurl+"user");
        },
        findonestore: function(id){
            console.log();
            return $http.get(apiurl+"store/"+id)
        },
        deletestore: function(id){
            return $http.delete(apiurl+"store/"+id,{});
        },
        updatestore: function(data){
            return $http.put(apiurl+"store/"+data.id,data);
        }
    }

});