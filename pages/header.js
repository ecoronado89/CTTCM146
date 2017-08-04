const menu = require('./selectors').menu;
const header = require('./selectors').header;
const foresee = require('./selectors').foresee

class Header {

    constructor() {

        this.llbeanLogoLocator = header.llbeanLogo;
        this.costumerServiceLinkLocator = header.costumerServiceLink;
        this.findStoreLinkLocator = header.findStoreLink;
        this.giftCardLinkLocator = header.giftCardLink;
        this.llbeanVisaButtonLocator = header.llbeanVisaButton;
        this.loginButtonLocator = header.loginButton;
        this.breadcrumbLocator = header.breadcrumb;

        this.mensLinkLocator = menu.mensLink;
        this.mensShirtLocator =  menu.mensShirt;

        this.browserForesee = foresee.browserSP;
        this.foreseeSetBtn = foresee.setBtn;
        this.foresseReturnBtn = foresee.returnBtn;

        this.bcArray = [];


    }

    //forsee methods
    get browserForeseeSP() {
        return browser.element(this.browserForesee);
    }

    get foresseeSetButton() {
        return browser.element(this.foreseeSetBtn);
    }

    get foreseeReturnButton() {
        return browser.element(this.foresseReturnBtn);
    }

    get mensLink() {
      return browser.element(this.mensLinkLocator);
    }

    get mensShirt() {
      return browser.element(this.mensShirtLocator);
    }

    get breadcumbList() {
      return browser.elements(this.breadcrumbLocator);
    }

    get llBeanLogo() {
        return browser.element(this.llbeanLogoLocator);
    }

    get costumerServiceLink() {
        return browser.element(this.costumerServiceLinkLocator);
    }

    get storeLink() {
        return browser.element(this.findStoreLinkLocator);
    }

    get giftCardLink() {
        return browser.element(this.giftCardLinkLocator);
    }

    get visaButton() {
        return browser.element(this.llbeanVisaButtonLocator);
    }

    get loginButton() {
        return browser.element(this.loginButtonLocator);
    }

    setForeseeValue() {
        this.browserForeseeSP.setValue('0');
    }

    clickForeseeSetBtn() {
        this.foresseeSetButton.click();
    }

    clickForeseeReturnBtn() {
        this.foreseeReturnButton.click();
    }

    clickMensLink() {
      return this.mensLink.click();
    }

    clickShirtLink() {
      return this.mensShirt.click();
    }

    getBreadcrumbs() {
      let size = this.breadcumbList.value.length;
      for (let key = 0; key < size; key++){
        this.bcArray.push(this.breadcumbList.value[key].getText())
      }
    }

    compareBreadCrumbs() {
      let actualArray = this.breadcumbList.value;
      console.log(`ARRAY ACTUAL:${this.bcArray}`);
      for(let ind = 0; ind < actualArray.length; ind++) {
         if(this.bcArray[ind] !== actualArray[ind].getText()){
           return false;
         }
         else {
           return true;
         }
      }
    }

    clickBreacCrumb(index) {
        this.breadcumbList.value[index].click();
    }

    isLogoVisible() {
        return this.llBeanLogo.isVisible();
    }

    isCostumerServiceVisible() {
        return this.costumerServiceLink.isVisible();
    }

    isStoreVisible() {
        return this.storeLink.isVisible();
    }

    isGiftCardVisible() {
        return this.giftCardLink.isVisible();
    }

    isVisaButtonVisible() {
        return this.visaButton.isVisible();
    }

    isLoginVisible() {
        return this.loginButton.isVisible();
    }
}

module.exports = new Header();

module.export = {


};
