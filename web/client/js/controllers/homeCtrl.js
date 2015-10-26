/**
 * Created by vedorhto on 04/09/2015.
 */
angular.module('myApp.home',[])
    .controller('HomeController', ['$scope', '$location','$anchorScroll','sharedProperties','me','AuthService',function($scope, $location, $anchorScroll,sharedProperties,me,AuthenticationService){
        console.log('HomeController me ='+me);
        console.log('HomeController sharedProperties.isConnected ='+sharedProperties.isConnected());

        $scope.scrollTo = function(id) {
            var old = $location.hash();
            $location.hash(id);
            $anchorScroll();
            $location.hash(old);
        }


    }]);
