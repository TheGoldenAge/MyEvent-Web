'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my client', function() {


  it('should automatically redirect to /test when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/test");
  });


  describe('test', function() {

    beforeEach(function() {
      browser.get('index.html#/test');
    });


    it('should render test when user navigates to /test', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('login', function() {

    beforeEach(function() {
      browser.get('index.html#/login');
    });


    it('should render view2 when user navigates to /login', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for login/);
    });

  });
});
