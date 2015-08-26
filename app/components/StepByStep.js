import React from 'react';
import {RouteHandler} from 'react-router';
import StepTabsContainer from './StepTabsContainer';
import InstantReview from './InstantReview';

class StepByStep extends React.Component{

  render(){

    return(
        <div className="row main_container">
          <div className="col-sm-8">
            <StepTabsContainer/>
            <RouteHandler/>
          </div>
          <div className="hidden-xs col-sm-3 col-md-offset-1">
            <InstantReview/>
          </div>
      </div>
    )
  }
}

export default StepByStep;
