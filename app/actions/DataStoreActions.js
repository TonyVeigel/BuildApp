import alt from '../alt';

class DataStoreActions{

  constructor(){
    this.generateActions(
      'updateRadius',
      'updateZipCode',
      'updateLocation',
      'updateCost',
      'updateAward'
    );
  }

  }

  export default alt.createActions(DataStoreActions);
