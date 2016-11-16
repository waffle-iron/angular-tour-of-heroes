import { browser, element, by } from 'protractor';

describe('Tour of Heros E2E Tests', function () {

  let expectedMsg = 'Tour of Heroes';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
