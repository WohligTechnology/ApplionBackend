var membershipRest = angular.module('membershipRest', [])



.factory('membershipRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/membership/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/membership/find");
        },
        findonemembership: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/membership/findone?id="+id,{})
        },
        deletemembership: function(id){
            return $http.get(apiurl+"/index.php/membership/delete?id="+id,{});
        },
        updatemembership: function(data){
            return $http.get(apiurl+"/index.php/membership/update",{params:data});
        }
    }

});