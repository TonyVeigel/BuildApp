import alt from '../alt';
import DataStoreActions from '../actions/DataStoreActions'


class DataStore {

  constructor(){
    this.bindActions(DataStoreActions);
    this.radius = '';
    this.zipCode = '';
  }
  onUpdateRadius(event){
    this.radius = event.target.value;
  }
  onUpdateZipCode(event){
    this.zipCode = event.target.value;
  }
}

export default alt.createStore(DataStore);
