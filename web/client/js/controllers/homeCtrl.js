/**
 * Created by vedorhto on 04/09/2015.
 */
angular.module('myApp.home',[])
    .controller('HomeController', function($scope, $location, $anchorScroll){

            $scope.scrollTo = function(id) {
                var old = $location.hash();
                $location.hash(id);
                $anchorScroll();
                $location.hash(old);
            }

    });
