import alt from '../alt';

class DataStoreActions{

  constructor(){
    this.generateActions(
      'updateRadius',
      'updateZipCode'
    );
  }

  }

  export default alt.createActions(DataStoreActions);
