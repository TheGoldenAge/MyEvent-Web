/**
 * Created by vedorhto on 06/10/2015.
 */
'use strict'

angular.module('registerCtrl',[])
    .controller('registerCtrl',['$scope','$rootScope','$location','$http','AuthenticationService', function($scope, $rootScope, $location, $http, AuthenticationService){
        //reset login status
        AuthenticationService.ClearCredentials();

        $scope.register = function(){
            $scope.dataLoading = true;

        }
    }]);