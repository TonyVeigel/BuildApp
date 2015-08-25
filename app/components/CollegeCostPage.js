import React from 'react';
import StepTabsActions from '../actions/StepTabsActions';
import CollegeCost from './CollegeCost';
import DataStore from '../stores/DataStore';

class CollegeCostPage extends React.Component{

  constructor(props){
    super(props);
    this.state = DataStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    StepTabsActions.updateSteps(
      {name:'Location', link:'/college-search/location', style:'done'},
      {name:'Cost', link:'/college-search/cost', style:'doing'},
      {name:'Award', link:'/college-search/award', style:'todo'},
      {name:'Program', link:'/college-search/program', style:'todo'},
      {name:'Delivery', link:'/college-search/degree', style:'todo'}
    )
    DataStore.listen(this.onChange);
  }

  componentWillUnmount(){
    DataStore.unlisten(this.onChange);
  }

  onChange(state){
    this.setState(state);
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="college_cost_container">
            <CollegeCost cost={this.state.cost}/>
          </div>
        </div>
      </div>
    )
  }
}

export default CollegeCostPage;
