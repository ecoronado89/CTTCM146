const categorypage = require('./selectors').categorypage;

class categoryPage {

  constructor(){
    this.filterNameLocator = categorypage.filterName;
    this.filterOptionLocator = categorypage.filterOption;
    this.products = categorypage.products;
    let index = 0;
    let indice = 0;
    let filterParentName = '';
    let filterOptions = '';
  }

  get filterName() {
    return browser.elements(this.filterNameLocator);
  }

  get filterOption() {
    return browser.elements(this.filterOptionLocator);
  }

  get availableProducts() {
    return browser.elements(this.products);
  }

  selectFilterName() {
    let filterNameSelected = this.filterName.elements('.filter-name');
    this.index = this.getRandom(0, filterNameSelected.value.length);
    //browser.pause(2000);
    //this.filterParentName = filterNameSelected.value[this.index].getText();

    this.selectFilterOption();
  }

  selectFilterOption() {
    let filterOptionName = this.filterName.elements('.filter-bucket');
    this.indice = this.getRandom(0, filterOptionName.value[this.index].elements('li').value.length);
    this.filterOptions = filterOptionName.value[this.index].elements('.filter-attrib').value[this.indice];
    if(filterOptionName.value[this.index].elements('.filter-attrib').value[this.indice].getAttribute('aria-checked')){
      this.filterOptions.click();
    }
    else{
      this.selectFilterOption();
    }
  }

  selectRandomProduct() {
    this.index = this.getRandom(0, this.availableProducts.value.length);
    let option = this.availableProducts.value[0];
    option.click();
  }


  getRandom(bottom, top){
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
  }
}

module.exports = new categoryPage();
