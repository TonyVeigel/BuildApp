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
  }
  onUpdateRadius(event){
    this.radius = event.target.value;
  }
  onUpdateZipCode(event){
    this.zipCode = event.target.value;
  }
  onUpdateCost(event){
    this.cost = event.target.value;
  }
  onUpdateAward(event){
    this.award = event.target.value;
    this.awardDescription = event.target.selectedOptions[0].text;
  }
}

export default alt.createStore(DataStore);
