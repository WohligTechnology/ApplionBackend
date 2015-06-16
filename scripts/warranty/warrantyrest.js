var warrantyRest = angular.module('warrantyRest', [])



.factory('warrantyRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"warranty",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"warranty");
        },
        findstore: function(){
            console.log();
            return $http.get(apiurl+"store");
        },
        findonewarranty: function(id){
            console.log();
            return $http.get(apiurl+"warranty/"+id)
        },
        deletewarranty: function(id){
            return $http.delete(apiurl+"warranty/"+id,{});
        },
        updatewarranty: function(data){
            return $http.put(apiurl+"warranty/"+data.id,data);
        }
    }

});