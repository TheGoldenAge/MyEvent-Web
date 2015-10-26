/**
 * Created by vedorhto on 26/10/2015.
 */
angular.module('myApp.logout',[])
.controller('LogoutController',['$scope','$location','AuthService',function($scope,$location,AuthService){

        $scope.logOut = function(){
            console.log(AuthService.getUserStatus());

            AuthService.logOut()
                .then(function(){
                    $location.path("/login");
                });
            /*if(AuthService.isLogged){
                AuthService.isLogged = false;
                //delete $window.sessionStorage.token;

            }*/
        }
    }]);