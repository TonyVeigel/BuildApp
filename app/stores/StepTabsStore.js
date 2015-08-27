import alt from '../alt';
import StepTabsActions from '../actions/StepTabsActions'


class SetTabsStore {

  constructor(){

    this.bindActions(StepTabsActions);
    this.steps = [
                  {name:'Location', link:'/college-search/guide/location', style:'doing'},
                  {name:'Cost', link:'/college-search/guide/cost', style:'todo'},
                  {name:'Award', link:'/college-search/guide/award', style:'todo'},
                  {name:'Program', link:'/college-search/guide/program', style:'todo'},
                  {name:'Search', link:'/college-search/guide/search', style:'todo'}
                ];
  }

  onUpdateSteps(steps){
    this.steps.forEach( function (element, i){
      element.style = steps[i].style
    })
  }

}

export default alt.createStore(SetTabsStore, 'SetTabsStore');
