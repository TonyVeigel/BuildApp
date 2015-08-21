import alt from '../alt';
import StepTabsActions from '../actions/StepTabsActions'


class SetTabsStore {

  constructor(){

    this.bindActions(StepTabsActions);
    this.steps = [{name:'College Type', link:'', style:'doing'},
                  {name:'Location', link:'', style:'todo'},
                  {name:'Cost', link:'', style:'todo'},
                  {name:'Award', link:'', style:'todo'},
                  {name:'Program', link:'', style:'todo'}];
  }
  onUpdateSteps(steps){
    this.steps = steps;
  }

}

export default alt.createStore(SetTabsStore);
