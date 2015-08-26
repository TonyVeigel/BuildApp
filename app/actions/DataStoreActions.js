import alt from '../alt';

class DataStoreActions{

  constructor(){
    this.generateActions(
      'updateRadius',
      'updateZipCode',
      'updateLocation',
      'updateCost',
      'updateAward',
      'updateCategory',
      'updateSubcategory',
      'updateDelivery'
    );
  }

  }

  export default alt.createActions(DataStoreActions);
