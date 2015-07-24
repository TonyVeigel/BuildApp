import React from 'react';
import AddDeployStore from '../stores/AddDeployStore'
import AddDeployActions from '../actions/AddDeployActions'

class DeploymentSummary extends React.Component{

  constructor(props){
    super(props);
    this.state = AddDeployStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    AddDeployStore.listen(this.onChange);
  }

  componentWillUnmount(){
    AddDeployStore.unlisten(this.onChange);
  }

  onChange(state){
    this.setState(state);
  }

  render(){
    return(

      <div className="row">
        <div className="col-md-12">
          <div className='panel panel-default'>
            <div className='panel-body'>
              <span className="submit_deployment_heading">I will be deploying </span> <span className="submit_deployment_answer">{this.state.appName ? this.state.appName  :"_________"} </span>
              <span className="submit_deployment_heading">on </span> <span className="submit_deployment_answer">{this.state.environment} </span>
              <span className="submit_deployment_heading">transfering a file from </span> <span className="submit_deployment_answer">{this.state.localLoc ? this.state.localLoc : "_________"} </span>
              <span className="submit_deployment_heading">to </span><span className="submit_deployment_answer">/apps/build/{this.state.appName ? this.state.appName : "_________"}/devstaging </span>
              <span className="submit_deployment_heading">on server </span><span className="submit_deployment_answer">{this.state.server ? this.state.server : "_________"} </span>
              <span className="submit_deployment_heading">in </span><span className="submit_deployment_answer">{this.state.deployTime} minutes </span>
              <span className="submit_deployment_heading">with username </span><span className="submit_deployment_answer">{this.state.username ? this.state.username : "_________"} </span>
              <span className="submit_deployment_heading">password </span><span className="submit_deployment_answer">**hidden** </span>
              <span className="submit_deployment_heading">email address </span><span className="submit_deployment_answer">{this.state.email ? this.state.email : "_________" } </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DeploymentSummary;
