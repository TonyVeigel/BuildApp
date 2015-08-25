import React from 'react';
import {RouteHandler} from 'react-router';
import StepTabsContainer from './StepTabsContainer';
import InstantReview from './InstantReview';

class StepByStep extends React.Component{

  render(){

    return(
        <div className="row">
          <div className="col-sm-8">
            <StepTabsContainer/>
            <RouteHandler/>
          </div>
          <div className="col-sm-4">
            <InstantReview/>
          </div>
      </div>
    )
  }
}

export default StepByStep;
