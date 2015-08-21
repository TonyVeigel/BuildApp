import React from 'react';
import SetTabsStore from '../stores/StepTabsStore';

class StepTabs extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      steps: props.steps
    }
  }

  render(){
    return(
        <ol className="progtrckr">{
              this.props.steps.map((s, i) =>
                <li value={i} key={i}
                              className={"progtrckr-" + s.style}
                              onClick={this.handleOnClick}>
                  <em>{i+1}</em>
                  <span>{s.name}</span>
                </li>
              )}
          </ol>
    )
  }
}

export default StepTabs;
