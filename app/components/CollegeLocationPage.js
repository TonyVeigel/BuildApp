import React from 'react';
import StepTabsContainer from './StepTabsContainer';
import CollegeLocationContainer from './CollegeLocationContainer';

class CollegeLocationPage extends React.Component{

  render(){
    return(
      <div className="col-md-9 col-md-offset-2">
        <div className="college_location_container">
          <CollegeLocationContainer/>
        </div>
      </div>
    )
  }
}

export default CollegeLocationPage;
