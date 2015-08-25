import React from 'react';
import StepTabsContainer from './StepTabsContainer';
import CollegeLocation from './CollegeLocation';
import DataStore from '../stores/DataStore';
import StepTabsActions from '../actions/StepTabsActions';

class CollegeLocationPage extends React.Component{

  constructor(props){
    super(props);
    this.state = DataStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    StepTabsActions.updateSteps(
      {name:'Location', link:'/college-search/location', style:'doing'},
      {name:'Cost', link:'/college-search/cost', style:'todo'},
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
        <div className="col-md-12 ">
          <div className="college_location_container">
            <CollegeLocation radius={this.state.radius} zipCode={this.state.zipCode}/>
          </div>
        </div>
      </div>
    )
  }
}

export default CollegeLocationPage;
