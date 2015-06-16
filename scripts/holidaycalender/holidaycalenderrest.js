var holidaycalenderRest = angular.module('holidaycalenderRest', [])



.factory('holidaycalenderRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"holidaycalender",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"holidaycalender");
        },
//        findpincode: function(){
//            console.log();
//            return $http.get(apiurl+"pincode");
//        },
//        findholidaycalenderlocation: function(){
//            console.log();
//            return $http.get(apiurl+"holidaycalenderlocation");
//        },
        findoneholidaycalender: function(id){
            console.log();
            return $http.get(apiurl+"holidaycalender/"+id)
        },
        deleteholidaycalender: function(id){
            return $http.delete(apiurl+"holidaycalender/"+id,{});
        },
        updateholidaycalender: function(data){
            return $http.put(apiurl+"holidaycalender/"+data.id,data);
        }
    }

});