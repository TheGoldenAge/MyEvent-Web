/**
 * Created by vedorhto on 26/10/2015.
 */
angular.module('myApp.AuthenticationService',[])
    .factory('AuthService',['Base64','$http','$cookieStore','$rootScope','$timeout','$location','$q','$window','sharedProperties', function(Base64,$http,$cookieStore,$rootScope,$timeout,$location,$q,$window,sharedProperties){
        //our user variable
        var user = null;

        return ({
            isLogged : isLoggedIn,
            getUserStatus: getUserStatus,
            logIn: logIn,
            googleLogIn: googleLogIn,
            logOut: logOut,
            register: register,
            ClearCredentials:ClearCredentials,
            SetCredentials:SetCredentials
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
                    console.log('data: ' +  JSON.stringify(data) + 'status: '+ status);
                if(status === 200 && data.status){
                    user=true;
                    sharedProperties.setConnected(true);
                    deferred.resolve({data:data,status:status});
                }else{
                    user=false;
                    deferred.reject({data:data,status:status});
                }
            })
            .error(function(data, status){
                    console.log('data: ' + JSON.stringify(data) + 'status: '+ status);
                user = false;
                deferred.reject({data:data,status:status});
            });

            // return promise object
            return deferred.promise;
        };

        //Google oauth2
        function googleLogIn(){
            //a new instance of deffered
            var deferred = $q.defer();

            //send a post request to the server
            //$http.post('/api/login',{username:username, password:password})
            //$window.location('/api/auth/google');
            $http({
                url:'/api/auth/google',
                method:'GET',
                withCredentials:true
            })
                .success(function(data, status){
                    console.log('data: ' +  JSON.stringify(data) + 'status: '+ status);
                    if(status === 200 && data.status){
                        user=true;
                        sharedProperties.setConnected(true);
                        deferred.resolve({data:data,status:status});
                    }else{
                        user=false;
                        deferred.reject({data:data,status:status});
                    }
                })
                .error(function(data, status){
                    console.log('data: ' + JSON.stringify(data) + 'status: '+ status);
                    user = false;
                    deferred.reject({data:data,status:status});
                });

            // return promise object
            return deferred.promise;
        };

        //facebook oauth
        function facebookLogIn(){
            //a new instance of deffered
            var deferred = $q.defer();

            //send a post request to the server
            //$http.post('/api/login',{username:username, password:password})
            //$window.location('/api/auth/google');
            $http({
                url:'/api/auth/facebook',
                method:'GET',
                withCredentials:true
            })
                .success(function(data, status){
                    console.log('data: ' +  JSON.stringify(data) + 'status: '+ status);
                    if(status === 200 && data.status){
                        user=true;
                        sharedProperties.setConnected(true);
                        deferred.resolve({data:data,status:status});
                    }else{
                        user=false;
                        deferred.reject({data:data,status:status});
                    }
                })
                .error(function(data, status){
                    console.log('data: ' + JSON.stringify(data) + 'status: '+ status);
                    user = false;
                    deferred.reject({data:data,status:status});
                });

            // return promise object
            return deferred.promise;
        };

        function logOut(){
            //a new instance of deffered
            var deferred = $q.defer();

            //send a get request to the server
            //$http.get('/api/logout')
            $http({
                url:'/api/logout',
                method:'GET'
            })
            .success(function(data, status){
                    console.log('data: ' +  JSON.stringify(data) + 'status: '+ status);
                    user = false;
                sharedProperties.setConnected(false);
                deferred.resolve();
            })
            .error(function(data, status){
                    console.log('data: ' +  JSON.stringify(data) + 'status: '+ status);
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

        function SetCredentials(username, password){
            var authdata = Base64.encode(username + ':' +password);

            $rootScope.globals = {
                currentUser:{
                    username:username,
                    authdata:authdata
                }
            };
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $cookieStore.put('globals', $rootScope.globals);
        };

        function ClearCredentials(){
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        //return service;
    }]);