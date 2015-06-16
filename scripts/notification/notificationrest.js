var notificationRest = angular.module('notificationRest', [])



.factory('notificationRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"notification",data);
        },
        findpincode: function(){
            console.log();
            return $http.get(apiurl+"pincode");
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"notification");
        },
        findbrand: function(){
            console.log();
            return $http.get(apiurl+"brand");
        },
        finduser: function(){
            console.log();
            return $http.get(apiurl+"user");
        },
        findonenotification: function(id){
            console.log();
            return $http.get(apiurl+"notification/"+id)
        },
        deletenotification: function(id){
            return $http.delete(apiurl+"notification/"+id,{});
        },
        updatenotification: function(data){
            return $http.put(apiurl+"notification/"+data.id,data);
        }
    }

});