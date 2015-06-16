var pincodeRest = angular.module('pincodeRest', [])



.factory('pincodeRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"pincode",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"pincode");
        },
        finddistrict: function(){
            console.log();
            return $http.get(apiurl+"district");
        },
//        finduserlocation: function(){
//            console.log();
//            return $http.get(apiurl+"userlocation");
//        },
        findonepincode: function(id){
            console.log();
            return $http.get(apiurl+"pincode/"+id)
        },
        deletepincode: function(id){
            return $http.delete(apiurl+"pincode/"+id,{});
        },
        updatepincode: function(data){
            return $http.put(apiurl+"pincode/"+data.id,data);
        }
    }

});