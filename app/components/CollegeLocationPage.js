import React from 'react/addons';
import StepTabsContainer from './StepTabsContainer';
import CollegeLocationContainer from './CollegeLocationContainer';

class CollegeLocationPage extends React.Component{

  render(){
    return(
      <div className="type_container">
        <StepTabsContainer/>
        <CollegeLocationContainer/>
      </div>
    )
  }
}

export default CollegeLocationPage;
