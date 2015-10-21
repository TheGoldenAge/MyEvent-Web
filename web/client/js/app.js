/**
 * Created by vedorhto on 28/08/2015.
 */

'use strict';

angular.module('myApp', [
    'ui.router',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngCookies',
    'ngStorage',
    'pascalprecht.translate',
    'myApp.controllers',
    'myApp.services',
    'myApp.factories',
    'myApp.directives',
    'myApp.filters'/*,
    'myApp.version'*/
])
    .config(['$routeProvider','$httpProvider', function($stateProvider,$httpProvider) {

  $stateProvider
      .when('/',
      {controller:'HomeController',
        templateUrl:'views/home.html'
      })
      .when('/home',
      {controller:'HomeController',
        templateUrl:'views/home.html'
      })
      .when('/login',
      {controller:'LoginController',
          templateUrl:'views/login.html'
      })
      .when('/register',
      {controller:'RegisterController',
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
            'THE_LOGIN':'Login',
            'THE_SIGN_UP':'Sign up',
            'LOGIN':'Login',
            'SIGN_IN':'Sign in',
            'SIGN_UP':'Sign up',
            'OR':'or',
            'CONNECT_WITH':'Connect with',
            'SIGN_UP_WITH':'Sign up with',
            'ORG_EVENT':'Organize your event',
            'MY_EVENT':'My Event',
            'WEDDING':'Wedding',
            'BAPTISM':'Baptism',
            'HOW_IT_WORKS':'How does it work?',
            'FEES':'Fees',
            'CONTACT':'Contact us',
            'BY_MAIL':'By Email',
            'CREATE_AN_EVENT':'Create an event'

        });
        $translateProvider.translations('fr_FR',{
            'E-MAIL':'Email',
            'E-MAIL_ADDRESS':'Adresse email',
            'PASSWORD':'Mot de passe',
            'THE_LOGIN':'Connexion',
            'THE_SIGN_UP':'Inscription',
            'LOGIN':'Pseudo',
            'SIGN_IN':'Se connecter',
            'SIGN_UP':'S\'inscrire',
            'OR':'ou',
            'CONNECT_WITH':'Se connecter avec',
            'SIGN_UP_WITH':'S\'inscrire avec',
            'ORG_EVENT':'Organiser votre Ã©venement',
            'MY_EVENT':'My Event',
            'WEDDING':'Marriage',
            'BAPTISM':'BaptÃªme',
            'HOW_IT_WORKS':'Comment Ã§a marche?',
            'FEES':'Tarifs',
            'CONTACT':'Nous contacter',
            'BY_MAIL':'Par email',
            'CREATE_AN_EVENT':'Créer un événement'
        });
        $translateProvider.preferredLanguage('fr_FR');
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.useLocalStorage();
    }]);
;


