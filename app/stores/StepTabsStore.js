import alt from '../alt';
import StepTabsActions from '../actions/StepTabsActions'


class SetTabsStore {

  constructor(){

    this.bindActions(StepTabsActions);
    this.steps = [
                  {name:'Location', link:'/college-search/location', style:'doing'},
                  {name:'Cost', link:'/college-search/cost', style:'todo'},
                  {name:'Award', link:'/college-search/location', style:'todo'},
                  {name:'Program', link:'/college-search/location', style:'todo'}
                ];
  }
  onUpdateSteps(steps){
    this.steps = steps;
  }

}

export default alt.createStore(SetTabsStore);
