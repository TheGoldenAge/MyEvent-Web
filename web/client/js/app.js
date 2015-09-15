'use strict';

// Declare client level module which depends on views, and components
angular.module('myApp', [
  'ngRoute','ngCookies',
  'controllers',
  'services',
  'factories',
  'directives',
  'filters',
  'myApp.version'
]).
config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {

  $routeProvider
      .when('/',
      {controller:'homeCtrl',
        templateUrl:'views/home.html'
      })
      .when('/home',
      {controller:'homeCtrl',
        templateUrl:'views/home.html'
      })
      .when('/login',
      {controller:'loginCtrl',
          templateUrl:'views/login.html'
      })
      .otherwise({redirectTo: '/login'});

        //interceptors to manipulate http request and responses
        $httpProvider.interceptors.push(function($q, $window, $location){
            return{
                request:function(config){
                    var path = new RegExp('/api');
                    var path2 = new RegExp('http://');
                    var path3 = new RegExp('https://');

                    if(path.test(config.url) && !(path2.test(config.url) || path3.test(config.url))){
                        if($window.sessionStorage.getItem('backendURL')){
                            config.url = $window.sessionStorage.getItem('backendURL') + config.url;
                            //config.headers.isWeb = 1;
                        }
                    }
                    return config;
                },
                'responseError':function(rejection){
                    if(rejection.status === 401){

                    }
                    return $q.reject(rejection);
                }
            }
        });
}]);
