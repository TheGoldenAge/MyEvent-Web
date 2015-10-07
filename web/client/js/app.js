'use strict';

angular.module('myApp', [
    'ui.router',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngCookies',
    'pascalprecht.translate',
    'controllers',
    'services',
    'factories',
    'directives',
    'filters',
    'myApp.version'
])
    .config(['$routeProvider','$httpProvider', function($stateProvider,$httpProvider) {

  $stateProvider
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
      .when('/register',
      {controller:'registerCtrl',
          templateUrl:'views/register.html'
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
}])
    .config(['$translateProvider', function($translateProvider){
        $translateProvider.translations('en_EN',{
            'E-MAIL':'E-mail',
            'E-MAIL_ADDRESS':'E-mail address',
            'PASSWORD':'Password',
            'LOGIN':'Login',
            'SIGN_IN':'Sign in',
            'SIGN_UP':'Sign up',
            'OR':'or'
        });
        $translateProvider.translations('fr_FR',{
            'E-MAIL':'Email',
            'E-MAIL_ADDRESS':'Adresse email',
            'PASSWORD':'Mot de passe',
            'LOGIN':'Pseudo',
            'SIGN_IN':'Se connecter',
            'SIGN_UP':'S\'inscrire',
            'OR':'ou'
        });
        $translateProvider.preferredLanguage('fr_FR');
        $translateProvider.useSanitizeValueStrategy('escape');
    }]);
;
