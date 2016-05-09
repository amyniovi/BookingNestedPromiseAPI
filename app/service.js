(function(){


    var myService = function($http) {

        //this returns a promise wrapped by "then" to the caller of getServiceUrl
        var getServiceUrl = function (url) {
            return $http({
                method: 'GET',
                url: url,
                headers: {'App-Id': '5a3d8b8d', 'App-Key': '738e9aca62e7465446b7be8fe4219ffa'}
            }).then(function successCallback(response) {
                return response.data._links.services.href;

            });

            var getServices = function(url){

                return $http({
                    method: 'GET',
                    url: url, // $scope.services,
                    headers: {'App-Id':'5a3d8b8d','App-Key':'738e9aca62e7465446b7be8fe4219ffa'}
                }).then(function successCallback(response){


                 return   response.data._embedded.services;
                });






            };

            return {getServiceUrl : getServiceUrl,
                    getServices : getServices};


        };
    };

    //register service
    var module = angular.module('plunker');
    module.factory('myService', myService);


}());