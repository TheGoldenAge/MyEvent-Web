/**
 * Created by vedorhto on 26/10/2015.
 */
angular.module('myApp.TokenInterceptor',[])
.factory('TokenInterceptor',['$q', '$window', function($q, $window){
        return{
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },

            requestError: function(rejection) {
                return $q.reject(rejection);
            }
            //,

            /*/!* Set Authentication.isAuthenticated to true if 200 received *!/
             response: function (response) {
             if (response != null && response.status == 200 && $window.sessionStorage.token && !AuthenticationService.isAuthenticated) {
             AuthenticationService.isAuthenticated = true;
             }
             return response || $q.when(response);
             },

             /!* Revoke client authentication if 401 is received *!/
             responseError: function(rejection) {
             if (rejection != null && rejection.status === 401 && ($window.sessionStorage.token || AuthenticationService.isAuthenticated)) {
             delete $window.sessionStorage.token;
             AuthenticationService.isAuthenticated = false;
             $location.path("/admin/login");
             }

             return $q.reject(rejection);
             }*/
        };
    }]);