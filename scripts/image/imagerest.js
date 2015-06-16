var imageRest = angular.module('imageRest', [])





.factory('imageRest', function ($http) {

    return {
        create: function (data,image) {
            console.log(data);
    console.log(image);
            return $http.get("http://localhost/politicianbackend/politician/index.php/upload/create?text="+data+"&image="+image,{});
        },
        find: function () {
            console.log();
            return $http.get(apiurl+"/index.php/image/find");
        },
        findoneimage: function (id) {
            console.log();
            return $http.get(apiurl+"/index.php/image/findone?id=" + id, {})
        },
        deleteimage: function (id) {
            return $http.get(apiurl+"/index.php/image/delete?id=" + id, {});
        },
        updateimage: function (data) {
            return $http.get(apiurl+"/index.php/image/update", {
                params: data
            });
        }
    }

});