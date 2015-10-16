'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));
  var $scope;
  describe('home controller', function(){

    beforeEach(inject(function($controller, $rootScope) {
      $scope = $rootScope.$new();

      it('should ....', inject(function($controller) {
        //spec body
        var homeCtrl = $controller('homeCtrl');
        expect(homeCtrl).toBeDefined();
      }));

    }))




  });
});