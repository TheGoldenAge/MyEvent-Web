/**
 * Created by vedorhto on 26/10/2015.
 */
angular.module('myApp.mymefactory',[])
.factory('mymefactory',['$window','$http','$q','sharedProperties',function($window,$http,$q,sharedProperties){
        var sdo = {
            myme:function(){
                console.log('entrée dans le myme');
                return $http
                    .get('/api/me')
                    .then(
                    function success(response){
                        sharedProperties.setConnected(true);
                        console.log(response);
                        console.log('sharedProperties.setConnected(true)')
                    },
                    function error(reason){
                        sharedProperties.setConnected(false);
                        console.log(reason);
                        console.log('sharedProperties.setConnected(false)')
                    })
            },
            myBackURL:function(){
                return $http
                    .get('backendURL/')
                    .then(
                    function success(response){
                        $window.sessionStorage.setItem('backendURL',response.data );
                        return true;
                    },
                    function error(reason){
                        return false;
                    })
            }
        };
        return sdo;
}]);