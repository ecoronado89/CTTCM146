const assert = require('assert');
const header = require('../pages/header');
const catPage = require('../pages/categorypage');


describe('CTTCM-146', () => {
  before(() => {
    browser.url('/llb/shop/589?page=mens-shirts&csp=f&nav=gnro-hp');
    browser.pause(4000);
  })
  it('Click Mens Link', () =>{
    header.clickMensLink();
    header.clickShirtLink();
    browser.pause(4000);
  });
  it.only('Select filter name', () =>{
    catPage.selectFilterName();
    browser.pause(6000);
    catPage.selectRandomProduct();
    browser.pause(5000);
    header.getBreadcrumbs();
    header.compareBreadCrumbs();
  })
});
