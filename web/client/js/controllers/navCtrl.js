/**
 * Created by vedorhto on 20/10/2015.
 */
angular.module('myApp.nav',[])
    .controller('NavController',['$scope','$translate','$localStorage','$window', function($scope, $translate, $localStorage,$window){
        $scope.languages = [
            {language:'en_EN', label:'English'},
            {language:'fr_FR', label:'Francais'}
        ];

        var getDefaultLanguage = function(){
                var response = {};
                angular.forEach($scope.languages, function(item){
                    if(item.language == $translate.storage().get()){
                        console.log(item)
                        response = item;
                    }
                });
                return response;
            };

        $scope.selectedLanguage = getDefaultLanguage();

        $scope.ChangeLanguage = function(lang){
            $translate.use(lang);
            $localStorage.language = lang;
            //TODO:$window.location.reload();
            //TODO:$scope.$apply();
        }

    }]);
