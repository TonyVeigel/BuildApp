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
      'updateDelivery',
      'updateCostValidationError'
    );
  }

  }

  export default alt.createActions(DataStoreActions);
