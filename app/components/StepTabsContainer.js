import React from 'react';
import StepTabs from './StepTabs';
import StepTabsStore from '../stores/StepTabsStore';

class StepTabsContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = StepTabsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    StepTabsStore.listen(this.onChange);
  }

  componentWillUnmount(){
    StepTabsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="progtckr_container">
            <StepTabs steps={this.state.steps}/>
          </div>
        </div>
      </div>
    )
  }
}

export default  StepTabsContainer;
