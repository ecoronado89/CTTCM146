const menu = require('./selectors').menu;
const header = require('./selectors').header;

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

        this.bcArray = [];


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
      for(let ind = 0; ind < actualArray.length; ind++) {
         if(this.bcArray[ind] !== actualArray[ind].getText()){
           return false;
         }
         else {
           return true;
         }
      }
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
