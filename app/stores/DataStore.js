import alt from '../alt';
import DataStoreActions from '../actions/DataStoreActions'


class DataStore {

  constructor(){
    this.bindActions(DataStoreActions);
    this.radius = '';
    this.zipCode = '';
    this.cost = '';
    this.award = '';
    this.awardDescription = '';
    this.category = '';
    this.categoryDescription = '';
    this.subcategory = '';
    this.subcategoryDescription = '';
    this.delivery = '';
    this.deliveryDescription = '';
    this.costValidationError = '';
  }
  onUpdateRadius(event){
    this.radius = event.target.value;
  }
  onUpdateZipCode(event){
    this.zipCode = event.target.value;
  }
  onUpdateCost(event){
    this.cost = event.target.value;
    if(this.cost && this.cost <= 5000){
      this.costValidationError = 'Please enter a value greater than 5000.'
    }else{
      this.costValidationError = '';
    }
  }
  onUpdateAward(event){
    this.award = event.target.value;
    this.awardDescription = event.target.selectedOptions[0].text;
  }
  onUpdateCategory(event){
    this.category = event.target.value;
    this.categoryDescription = event.target.selectedOptions[0].text;
  }
  onUpdateSubcategory(event){
    this.subcategory = event.target.value;
    this.subcategoryDescription = event.target.selectedOptions[0].text;
  }
  onUpdateDelivery(event){
    this.delivery = event.target.value;
    this.deliveryDescription = event.target.selectedOptions[0].text;
  }
}

export default alt.createStore(DataStore, 'DataStore');
