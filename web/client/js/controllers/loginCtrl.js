/**
 * Created by vedorhto on 09/09/2015.
 */
'use strict'

angular.module('loginCtrl',[])
    .controller('loginCtrl',['$scope','$rootScope','$location','$http','AuthenticationService', function($scope, $rootScope, $location, $http, AuthenticationService){
        //reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function(){
            $scope.dataLoading = true;

        }
    }]);