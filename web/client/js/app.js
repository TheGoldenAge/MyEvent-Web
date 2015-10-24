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
      .when('/newevent',
      {controller:'NewEventController',
          templateUrl:'views/newevent.html'
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
            'E-MAIL':'Email ',
            'E-MAIL_ADDRESS':'E-mail adress',
            'PASSWORD':'Password',
            'THE_LOGIN':'Connection ',
            'THE_SIGN_UP':'Sign up',
            'LOGIN':'Nickname ',
            'SIGN_IN':'Sign In',
            'SIGN_UP':'Sign Up ',
            'OR':'or',
            'CONNECT_WITH':'Connect with ',
            'SIGN_UP_WITH':'Register with ',
            'ORG_EVENT':'Your event ',
            'MY_EVENT':'My Event ',
            'WEDDING':'Wedding',
            'BAPTISM':'Baptism ',
            'HOW_IT_WORKS':'How it works?',
            'FEES':'Rates',
            'CONTACT':'Contact us',
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
            'ORG_EVENT':'Votre évenement',
            'MY_EVENT':'My Event',
            'WEDDING':'Marriage',
            'BAPTISM':'Baptême',
            'HOW_IT_WORKS':'Comment ça marche?',
            'FEES':'Tarifs',
            'CONTACT':'Nous contacter',
            'BY_MAIL':'Par email',
            'CREATE_AN_EVENT':'Créer un événement',
            'CAR_ORGANIZE':'Organiser votre mariage',
            'CAR_ORGANIZE_P':'Créer votre site de mariage personalisé à votre image',
            'CAR_CREATE':'Choisir vos faire parts',
            'CAR_CREATE_P':'Envoyer les faire parts personnalisés aux invités',
            'CAR_SHARE':'Espace partagé',
            'CAR_SHARE_P':'Informations utiles, photos, diaporamas, promotions',
            'MAR_CREATE':'Créer',
            'MAR_CREATE_P' :'Organiser votre mariage avec des invités triés sur le volet, des faires parts personnalisés et en partageant les informations utiles.',
            'VIEW_DETAILS':'En savoir plus',
            'MAR_SHARE':'Partager',
            'MAR_SHARE_P':'Un espace personnel intime avec les invités. Un espace de partage pour profiter de l\'évenement et partager photos et vidéos.',
            'MAR_THANK':'Remercier',
            'MAR_THANK_P':'Envoyer des cartes de remerciements personnalisés. Découvrir les liste des cadeaux des invités et créer votre album souvenir.',
            'PARTNERS':'Nos partenaires',
            'FEAT_CREATE':'Créer, organiser. ',
            'FEAT_CREATE_SP':'Personnaliser votre mariage ',
            'FEAT_CREATE_P':'Personnaliser votre évenement (Diaporama, playlist partagée etc...). Sélectionner les invités parmis vos amis. Choisir votre faire part parmi une grande liste et les envoyer par email ou par courier aux invités. Personnaliser les rappels et les confirmations de chaque invités.',
            'FEAT_SHARE':'Vivre l\'émotion du moment.',
            'FEAT_SHARE_SP':'Immortaliser et partager',
            'FEAT_SHARE_P':'Vivre l\'évenement en toute sérénité. Un espace privé pour le partage des photos et vidéos entre les invités. La récupération des photos et vidéos devient un jeu d\'enfant.',
            'FEAT_THANK':'Remercier. ',
            'FEAT_THANK_SP':'Carte personnalisée.',
            'FEAT_THANK_P':'Choisir les cartes de remerciements personnalisés ou bouquets de fleurs à envoyer aux invités. Découvrir la liste de cadeaux.',
            'LANGUAGES':'Changer de langue'

        });
        $translateProvider.preferredLanguage('fr_FR');
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.useLocalStorage();
    }]);
;


