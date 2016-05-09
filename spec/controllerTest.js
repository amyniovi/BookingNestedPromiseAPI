/**
 * Created by Amy on 06/05/2016.
 */
describe("APIServices", function(){

    //
    var $scope;
    var $q;
    var deferred;
    var $controller;
    beforeEach(module('plunker'));

   //because controllers are not available in global scope, we ll need to inject our controller first
    //the injector unwraps the the underscores when matching
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));



    describe('APIServiceCall', function () {
        it('should return 4 services', function () {
            var $scope = {};

            var controller = $controller('MainCtrl', {$scope: $scope});

            //mock first service(we dont need to check the url it brings back, not a requirement)

            //check that second service brings back 4 services


        });
        });
    });


// expect($scope.serviceObject.length).toBe(4);