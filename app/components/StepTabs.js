import React from 'react';
import SetTabsStore from '../stores/StepTabsStore';
import {Link} from 'react-router';

class StepTabs extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ol className="progtrckr">{
              this.props.steps.map((s, i) =>
              <Link to={s.link} key={i}>
                <li value={i} className={"progtrckr-" + s.style}
                    onClick={this.handleOnClick}>
                  <em>{i+1}</em>
                  <span>{s.name}</span>
                </li>
                </Link>
              )}
          </ol>
      </div>
    )
  }
}

export default StepTabs;
