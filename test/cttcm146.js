const assert = require('assert');
const header = require('../pages/header');
const catPage = require('../pages/categorypage');


describe('CTTCM-146', () => {
  before(() => {
    //browser.url('/llb/shop/589?page=mens-shirts&csp=f&nav=gnro-hp');
    browser.url('#acscommand=fstest');
    browser.pause(2000);
    header.setForeseeValue();
    header.clickForeseeSetBtn();
    header.clickForeseeReturnBtn();
    browser.pause(3000);   
  })
  it('Pre-conditions', () =>{
    header.clickMensLink();
    header.clickShirtLink();
    browser.pause(4000);
  });
  it('Step#1 - Click through to any product page', () =>{
    catPage.selectFilterName();
    browser.pause(4000);
    catPage.selectRandomProduct();
    browser.pause(4000);
    header.getBreadcrumbs();
    assert(header.compareBreadCrumbs());
  });
  it('Step#2 - Click Sub2 link in breadcrumb', () => {
    header.clickBreacCrumb(2);
    //TODO validate returned to Sub2 page -- how??
    //TODO validate Sub2 page title
    assert(header.compareBreadCrumbs());
    assert(catPage.isTotalProductsVisible());
  });
  it('Step#3 - Select second refinement', () => {
    catPage.selectFilterName();
    browser.pause(4000);
    catPage.selectRandomProduct();
    browser.pause(4000);
    header.getBreadcrumbs();
    assert(header.compareBreadCrumbs());
  });
});
