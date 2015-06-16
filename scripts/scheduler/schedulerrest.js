var schedulerRest = angular.module('schedulerRest', [])



.factory('schedulerRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/scheduler/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/scheduler/find");
        },
        findonescheduler: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/scheduler/findone?id="+id,{})
        },
        deletescheduler: function(id){
            return $http.get(apiurl+"/index.php/scheduler/delete?id="+id,{});
        },
        updatescheduler: function(data){
            return $http.get(apiurl+"/index.php/scheduler/update",{params:data});
        }
    }

});