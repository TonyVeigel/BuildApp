import React from 'react';
import StepTabsContainer from './StepTabsContainer';
import CollegeLocation from './CollegeLocation';
import DataStore from '../stores/DataStore';

class CollegeLocationPage extends React.Component{

  constructor(props){
    super(props);
    this.state = DataStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
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
      <div className="col-md-9 col-md-offset-2">
        <div className="college_location_container">
          <CollegeLocation radius={this.state.radius} miles=={this.state.miles}/>
        </div>
      </div>
    )
  }
}

export default CollegeLocationPage;
