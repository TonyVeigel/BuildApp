import React from 'react';
import {RouteHandler} from 'react-router';
import StepTabsContainer from './StepTabsContainer';
import InstantReviewContainer from './InstantReviewContainer';

class StepByStep extends React.Component{

  render(){

    return(
      <div>
          <div className="col-sm-10 col-md-8">
            <StepTabsContainer/>
            <RouteHandler/>
          </div>
          <div className="hidden-xs col-sm-2 col-md-2 col-md-offset-1">
            <InstantReviewContainer/>
          </div>
      </div>
    )
  }
}

export default StepByStep;
