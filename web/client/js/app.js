/**
 * Created by vedorhto on 28/08/2015.
 */

'use strict';

angular.module('myApp', ['ngSanitize', 'ui.router', 'ngResource', 'ngRoute', 'ngCookies', 'ngStorage', 'pascalprecht.translate', 'myApp.controllers', 'myApp.services', 'myApp.factories', 'myApp.directives', 'myApp.filters'/*,  'myApp.version'*/])
    .config(['$compileProvider', function( $compileProvider ){
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sesame):/);
            // pour les liens sesame, pour qu'angular ne rajoute pas unsafe devant
        }])
    .config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {

        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'views/home.html',
                resolve: {
                    'me': function (mymefactory) {
                        return mymefactory.myBackURL().then(function (data) {
                            return mymefactory.myme();
                        });
                    }
                }
            })
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'views/home.html',
                resolve: {
                    'me': function (mymefactory) {
                        return mymefactory.myBackURL().then(function (data) {
                            return mymefactory.myme();
                        });
                    }
                }
            })
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'views/login.html',
                resolve: {
                    'me': function (mymefactory) {
                        return mymefactory.myBackURL().then(function (data) {
                            return mymefactory.myme();
                        });
                    }
                }
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'views/register.html',
                resolve: {
                    'me': function (mymefactory) {
                        return mymefactory.myBackURL().then(function (data) {
                            return mymefactory.myme();
                        });
                    }
                }
            })
            .when('/logout', {
                controller: 'logoutCtrl',
                //templateUrl: 'logout.html',
                resolve: {
                    'me': function (mymefactory) {
                        return mymefactory.myBackURL().then(function (data) {
                            return mymefactory.myme();
                        });
                    }
                }
            })
            .when('/newevent', {
                controller: 'NewEventController',
                templateUrl: 'views/newevent.html'
            })
            .otherwise({redirectTo: '/login'})

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
            'BAPTISM':'Baptism ',
            'HOW_IT_WORKS':'How it works?',
            'FEES':'Rates',
            'CONTACT':'Contact us',
            'LOGOUT':'Logout',
            'BY_MAIL':'By email',
            'CREATE_AN_EVENT':'Create An Event ',
            'CAR_ORGANIZE':'Organize your wedding ',
            'CAR_ORGANIZE_P':'Create your wedding website personalized to your image ',
            'CAR_CREATE':'Choose your shares to ',
            'CAR_CREATE_P':'Send them personalized Units guests',
            'CAR_SHARE':'Shared space ',
            'CAR_SHARE_P':'Useful information, slideshows, promotions',
            'MAR_CREATE':'Create ',
            'MAR_CREATE_P' :'Organize your wedding with guests carefully selected, customized faires share and sharing relevant information. ',
            'VIEW_DETAILS':'More ',
            'MAR_SHARE':'Share ',
            'MAR_SHARE_P':'An intimate personal space with the guests. A shared space to enjoy the event and share photos and videos. ',
            'MAR_THANK':'Thank ',
            'MAR_THANK_P':'Send personalized thank you cards. Discover the list of gifts from guests and create your scrapbook. ',
            'PARTNERS':'Our partners',
            'FEAT_CREATE':'Create, organize. ',
            'FEAT_CREATE_SP':'Customize your wedding ',
            'FEAT_CREATE_P':'Customize your event (Slideshow, shared playlist etc ...). Select guests among friends. Choose your share from a wide list and send them by email or by mail to the guests. Customize reminders and confirmations of every guest. ',
            'FEAT_SHARE':'Experience the emotion of the moment. ',
            'FEAT_SHARE_SP':'Capture and share ',
            'FEAT_SHARE_P':'Live the event with confidence. A private space for sharing photos and videos between guests. The recovery of photos and videos becomes very easy',
            'FEAT_THANK':'Thanks. ',
            'FEAT_THANK_SP':'Personalized card. ',
            'FEAT_THANK_P':'Choose cards or personalized thank bouquets of flowers to send to guests. Discover the gift list. ',
            'LANGUAGES':'Change language'

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
            'ORG_EVENT':'Votre �venement',
            'MY_EVENT':'My Event',
            'WEDDING':'Marriage',
            'BAPTISM':'Bapt�me',
            'HOW_IT_WORKS':'Comment �a marche?',
            'FEES':'Tarifs',
            'CONTACT':'Nous contacter',
            'BY_MAIL':'Par email',
            'LOGOUT':'Se d�connecter',
            'CREATE_AN_EVENT':'Cr�er un �v�nement',
            'CAR_ORGANIZE':'Organiser votre mariage',
            'CAR_ORGANIZE_P':'Cr�er votre site de mariage personalis� � votre image',
            'CAR_CREATE':'Choisir vos faire parts',
            'CAR_CREATE_P':'Envoyer les faire parts personnalis�s aux invit�s',
            'CAR_SHARE':'Espace partag�',
            'CAR_SHARE_P':'Informations utiles, photos, diaporamas, promotions',
            'MAR_CREATE':'Cr�er',
            'MAR_CREATE_P' :'Organiser votre mariage avec des invit�s tri�s sur le volet, des faires parts personnalis�s et en partageant les informations utiles.',
            'VIEW_DETAILS':'En savoir plus',
            'MAR_SHARE':'Partager',
            'MAR_SHARE_P':'Un espace personnel intime avec les invit�s. Un espace de partage pour profiter de l\'�venement et partager photos et vid�os.',
            'MAR_THANK':'Remercier',
            'MAR_THANK_P':'Envoyer des cartes de remerciements personnalis�s. D�couvrir les liste des cadeaux des invit�s et cr�er votre album souvenir.',
            'PARTNERS':'Nos partenaires',
            'FEAT_CREATE':'Cr�er, organiser. ',
            'FEAT_CREATE_SP':'Personnaliser votre mariage ',
            'FEAT_CREATE_P':'Personnaliser votre �venement (Diaporama, playlist partag�e etc...). S�lectionner les invit�s parmis vos amis. Choisir votre faire part parmi une grande liste et les envoyer par email ou par courier aux invit�s. Personnaliser les rappels et les confirmations de chaque invit�s.',
            'FEAT_SHARE':'Vivre l\'�motion du moment.',
            'FEAT_SHARE_SP':'Immortaliser et partager',
            'FEAT_SHARE_P':'Vivre l\'�venement en toute s�r�nit�. Un espace priv� pour le partage des photos et vid�os entre les invit�s. La r�cup�ration des photos et vid�os devient un jeu d\'enfant.',
            'FEAT_THANK':'Remercier. ',
            'FEAT_THANK_SP':'Carte personnalis�e.',
            'FEAT_THANK_P':'Choisir les cartes de remerciements personnalis�s ou bouquets de fleurs � envoyer aux invit�s. D�couvrir la liste de cadeaux.',
            'LANGUAGES':'Changer de langue'

        });
        $translateProvider.preferredLanguage('fr_FR');
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.useLocalStorage();
    }])
    .config(function($httpProvider){
        //CORS, force le cookie
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.useXDomain = true ;
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
        //$httpProvider.interceptors.push('TokenInterceptor');
    })
    /*.run(function($rootScope, $location, $route,AuthService){
        $rootScope.$on('$routeChangeStart', function(event, next, current){
            if(AuthService.isLogged() === false){
                $location.path('/login');
            }
        })
    })*/;


