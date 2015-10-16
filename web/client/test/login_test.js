'use strict';

describe('myApp.login module', function() {

  beforeEach(module('myApp.login'));
  var $scope;
  describe('home controller', function(){

    beforeEach(inject(function($controller, $rootScope) {
      $scope = $rootScope.$new();

      it('should ....', inject(function($controller) {
        //spec body
        var loginCtrl = $controller('loginCtrl');
        expect(loginCtrl).toBeDefined();
      }));

    }))




  });
});