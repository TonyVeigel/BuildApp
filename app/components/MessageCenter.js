import React from 'react';
import AddDeployStore from '../stores/AddDeployStore';
import AddDeployActions from '../actions/AddDeployActions';

class MessageCenter extends React.Component{

  render(){
    return(
      <div className='panel panel-default'>
        <div className='panel-heading'>Message Center</div>
        <div className='panel-body'>
          <div className={'alert ' + this.props.deployStatus}>{this.props.helpBlock}</div>
        </div>
      </div>
    )
  }
}

export default MessageCenter;
