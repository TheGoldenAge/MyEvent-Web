/**
 * Created by vedorhto on 09/09/2015.
 */
'use strict'

angular.module('myApp.login',[])
    .controller('LoginController',['$scope','$location','$window','AuthService','sharedProperties','me', function($scope, $location,$window, AuthService,sharedProperties,me){
        console.log('LoginController me ='+me);
        console.log('LoginController sharedProperties.isConnected ='+sharedProperties.isConnected());
        console.log(AuthService.getUserStatus());

        //reset login status
        AuthService.ClearCredentials();

        $scope.logIn = function logIn(username, password){
            //initial values
            $scope.error = false;
            $scope.disabled = true;

            //call login from service
            //console.log('username '+ username +', password ' + password)
            if(username !== undefined && password !== undefined){
                AuthService.logIn(username, password)
                    .then(function(callback){
                        console.log('data: ' +  JSON.stringify(callback.data) + ' status: '+ callback.status);
                        //AuthService.isLogged = true;
                        //$window.sessionStorage.token  = data.token;
                        console.log('login success')
                        $location.path("/home");
                        $scope.disabled =false;
                        $scope.login ={};
                    })
                    .catch(function(callback){
                        console.log('data: ' +  JSON.stringify(callback.data) + 'status: '+ callback.status);
                        //console.log(status);
                        //console.log(data);
                        $scope.error =true;
                        $scope.errorMessage = "";
                        $scope.disabled =false;
                        $scope.loginForm = {};
                        //if (status == 403) {
                        var myMessage = callback.data.message;
                        $('#error .modal-body').html("<p><div style='text-align: center; font-size: 20px; font-weight: bold;'>" + myMessage );
                        $('#error').modal("show");
                        $('div#error.modal').css('z-index', 2000);
                        $('#error.modal.fade.in').css('z-index', 2000);
                        //}
                    });
            }
        };

        $scope.socialLogIn = function(social){
            //google auth
            if(social == "google"){
                AuthService.googleLogIn()
                    .then(function(callback){
                        console.log('data: ' +  JSON.stringify(callback));
                        //console.log('data: ' +  JSON.stringify(callback.data) + ' status: '+ callback.status);
                        //AuthService.isLogged = true;
                        //$window.sessionStorage.token  = data.token;
                        console.log('login success')
                        $location.path("/home");
                        $scope.disabled =false;
                        $scope.login ={};
                    })
                    .catch(function(callback){
                        console.log(callback);
                        //console.log(status);
                        //console.log(data);
                        $scope.error =true;
                        $scope.errorMessage = "";
                        $scope.disabled =false;
                        $scope.loginForm = {};
                        //if (status == 403) {
                        var myMessage = ""//callback.data.message;
                        $('#error .modal-body').html("<p><div style='text-align: center; font-size: 20px; font-weight: bold;'>" + myMessage );
                        $('#error').modal("show");
                        $('div#error.modal').css('z-index', 2000);
                        $('#error.modal.fade.in').css('z-index', 2000);
                    })
            }
            //facebook auth
            if(social == "facebook"){

            }

        }



    }]);