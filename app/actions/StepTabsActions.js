import alt from '../alt';

class StepTabsActions{

  constructor(){
    this.generateActions(
      'updateSteps'
    );
  }

    updateSteps(steps){
       this.actions.updateSteps(steps);
    }
  }

  export default alt.createActions(StepTabsActions);
