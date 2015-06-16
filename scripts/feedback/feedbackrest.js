var feedbackRest = angular.module('feedbackRest', [])



.factory('feedbackRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"feedback",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"feedback");
        },
        finduser: function(){
            console.log();
            return $http.get(apiurl+"user");
        },
        findonefeedback: function(id){
            console.log();
            return $http.get(apiurl+"feedback/"+id)
        },
        deletefeedback: function(id){
            return $http.delete(apiurl+"feedback/"+id,{});
        },
        updatefeedback: function(data){
            return $http.put(apiurl+"feedback/"+data.id,data);
        }
    }

});