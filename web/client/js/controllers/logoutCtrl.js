/**
 * Created by vedorhto on 26/10/2015.
 */
angular.module('myApp.logout',[])
.controller('LogoutController',['$scope','$location','AuthService',function($scope,$location,AuthService){

        $scope.logOut = function(){
            console.log(AuthService.getUserStatus());

            AuthService.logOut()
                .then(function(){
                    console.log('je suis dans then');
                    //console.log(AuthService.getUserStatus());
                    //console.log(AuthService.isLogged());
                    //if(!AuthService.isLogged())$location.path("/login");
                })
                .catch(function(){
                    console.log('je suis dans catch');
                });

        }
    }]);