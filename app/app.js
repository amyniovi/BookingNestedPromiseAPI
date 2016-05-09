var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope,myService) {

  /*var config = {headers: {
    'App-Id': '5a3d8b8d',
    'App-Key': '738e9aca62e7465446b7be8fe4219ffa'
  }
  };*/

 /* $http.get('https://uk.bookingbug.com/api/v1/company/41285', config).
  success(function(data) {
    $scope.company = data;
  });*/

     myService.getServiceUrl('https://uk.bookingbug.com/api/v1/company/41285')
        .then(function successCallback(responseUrl){
            $scope.services = responseUrl;
            myService.getServices(responseUrl)
                .then(function successCallback(responseJSON){

                $scope.serviceObject = responseJSON;
                $scope.priceObject = [];

                angular.forEach($scope.serviceObject, function(value, key){

                    angular.forEach(value, function(value, key){

                        if (key === 'prices'){
                            $scope.priceObject.push(value);
                        }

                    });


                });

            }, function errorCallback(response) {
                //console.log(response.data);
            });
        }, function errorCallback(response) {
            //console.log(response.data);
        });




});


