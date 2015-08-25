import alt from '../alt';
import StepTabsActions from '../actions/StepTabsActions'


class SetTabsStore {

  constructor(){

    this.bindActions(StepTabsActions);
    this.steps = [
                  {name:'Location', link:'/college-search/location', style:'doing'},
                  {name:'Cost', link:'/college-search/cost', style:'todo'},
                  {name:'Award', link:'/college-search/award', style:'todo'},
                  {name:'Program', link:'/college-search/program', style:'todo'},
                  {name:'Delivery', link:'/college-search/degree', style:'todo'}
                ];
  }
  onUpdateSteps(steps){
    this.steps = steps;
  }

}

export default alt.createStore(SetTabsStore);
