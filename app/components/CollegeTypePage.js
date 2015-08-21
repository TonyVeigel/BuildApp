import React from 'react/addons';
import StepTabsContainer from './StepTabsContainer';
import CollegeTypeContainer from './CollegeTypeContainer';

class CollegeTypePage extends React.Component{

  render(){
    return(

      <div className="type_container">
        <StepTabsContainer/>
        <CollegeTypeContainer/>
      </div>

    )
  }
}

export default CollegeTypePage;
