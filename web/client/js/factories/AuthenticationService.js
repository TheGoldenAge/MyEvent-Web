/**
 * Created by vedorhto on 26/10/2015.
 */
angular.module('myApp.AuthenticationService',[])
    .factory('AuthService',['Base64','$http','$cookieStore','$rootScope','$timeout','$location','$q','sharedProperties', function(Base64,$http,$cookieStore,$rootScope,$timeout,$location,$q,sharedProperties){
        //our user variable
        var user = null;

        return ({
            isLogged : isLoggedIn,
            getUserStatus: getUserStatus,
            logIn: logIn,
            logOut: logOut,
            register: register
        });

        function isLoggedIn(){
            return !!user;
        };

        function getUserStatus(){
            return user;
        };

        function logIn(username, password){
            //a new instance of deffered
            var deferred = $q.defer();

            //send a post request to the server
            //$http.post('/api/login',{username:username, password:password})
            $http({
                url:'/api/login',
                method:'POST',
                data:{username:username, password:password},
                withCredentials:true
            })
            .success(function(data, status){
                if(status === 200 && data.status){
                    user=true;
                    sharedProperties.setConnected(true);
                    deferred.resolve();
                }else{
                    user=false;
                    deferred.reject();
                }
            })
            .error(function(data){
                user = false;
                deferred.reject();
            });

            // return promise object
            return deferred.promise;
        };

        function logOut(){
            //a new instance of deffered
            var deferred = $q.defer();

            //send a get request to the server
            $http.get('/api/logout')
                .success(function(data){
                    user = false;
                    sharedProperties.setConnected(false);
                    deferred.reject();
                })
                .error(function(data){
                    sharedProperties.setConnected(false);
                    user = false;
                    deferred.reject();
                });

            // return promise object
            return deferred.promise;
        };

        function register(){
            return{};
        }

        /*service.SetCredentials = function(username, password){
            var authdata = Base64.encode(username + ':' +password);

            $rootScope.globals = {
                currentUser:{
                    username:username,
                    authdata:authdata
                }
            };
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $cookieStore.put('globals', $rootScope.globals);
        };*/

        /*service.ClearCredentials = function(){
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };*/

        //return service;
    }]);