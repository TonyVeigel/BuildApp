import React from 'react';
import StepTabs from './StepTabs';
import StepTabsStore from '../stores/StepTabsStore';

class StepTabsContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = StepTabsStore.getState();
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
      <div className="progtckr_container">
        <StepTabs steps={this.state.steps}/>
      </div>
    )
  }
}

export default  StepTabsContainer;
