var districtRest = angular.module('districtRest', [])



.factory('districtRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"district",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"district");
        },
        findstate: function(){
            console.log();
            return $http.get(apiurl+"state");
        },
//        finduserlocation: function(){
//            console.log();
//            return $http.get(apiurl+"userlocation");
//        },
        findonedistrict: function(id){
            console.log();
            return $http.get(apiurl+"district/"+id)
        },
        deletedistrict: function(id){
            return $http.delete(apiurl+"district/"+id,{});
        },
        updatedistrict: function(data){
            return $http.put(apiurl+"district/"+data.id,data);
        }
    }

});