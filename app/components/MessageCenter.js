import React from 'react';
import AddDeployStore from '../stores/AddDeployStore';
import AddDeployActions from '../actions/AddDeployActions';

class MessageCenter extends React.Component{

  constructor(props){
    super(props);
    this.state = AddDeployStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    AddDeployStore.listen(this.onChange)
  }

  componentWillUnmount(){
    AddDeployStore.unlisten(this.onChange)
  }

  onChange(state){
    this.setState(state);
  }

  render(){

    return(

      <div className='panel panel-default'>
        <div className='panel-heading'>Message Center</div>
        <div className='panel-body'>
          <div className={'alert ' + this.state.deployStatus}>{this.state.helpBlock}</div>
        </div>
      </div>
    )
  }
}

export default MessageCenter;
