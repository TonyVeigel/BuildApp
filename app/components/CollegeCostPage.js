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
      {style:'done'},
      {style:'doing'},
      {style:'todo'},
      {style:'todo'},
      {style:'todo'}
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
            <CollegeCost costValidationError={this.state.costValidationError} cost={this.state.cost}/>
          </div>
        </div>
      </div>
    )
  }
}

export default CollegeCostPage;
