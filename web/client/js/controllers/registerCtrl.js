/**
 * Created by vedorhto on 06/10/2015.
 */
'use strict'

angular.module('myApp.register',[])
    .controller('RegisterController',['$scope','$rootScope','$location','$http','AuthService', function($scope, $rootScope, $location, $http, AuthService){
        //reset login status
        AuthService.ClearCredentials();

        $scope.register = function(){
            $scope.dataLoading = true;

        }
    }]);