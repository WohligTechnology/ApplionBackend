var appliancetypeRest = angular.module('appliancetypeRest', [])



.factory('appliancetypeRest', function ($http) {

    return {
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"appliancetype",data);
        },
        find: function () {
            console.log();
            return $http.get(apiurl + "appliancetype");
        },
        findbrand: function () {
            console.log();
            return $http.get(apiurl + "brand");
        },
        findoneappliancetype: function (id) {
            console.log();
            return $http.get(apiurl + "appliancetype/" + id)
        },
        deleteappliancetype: function (id) {
            return $http.delete(apiurl + "appliancetype/" + id, {});
        },
        updateappliancetype: function (data) {
            return $http.put(apiurl + "appliancetype/" + data.id, data);
        }
    }

});