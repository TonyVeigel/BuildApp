import React from 'react';

class DeploymentSummary extends React.Component{

  render(){
    return(

      <div className="row">
        <div className="col-md-12">
          <div className='panel panel-default'>
            <div className='panel-body'>
              <span className="submit_deployment_heading">I will be deploying </span> <span className="submit_deployment_answer">{this.props.appName ? this.props.appName + ".war"  :"_________"} </span>
              <span className="submit_deployment_heading">on </span> <span className="submit_deployment_answer">{this.props.environment} </span>
              <span className="submit_deployment_heading">transfering a file from </span> <span className="submit_deployment_answer">{this.props.localLoc ? this.props.localLoc : "_________"} </span>
              <span className="submit_deployment_heading">to </span><span className="submit_deployment_answer">/apps/build/{this.props.appName ? this.props.appName : "_________"}/devstaging </span>
              <span className="submit_deployment_heading">on server </span><span className="submit_deployment_answer">{this.props.server ? this.props.server : "_________"} </span>
              <span className="submit_deployment_heading">in </span><span className="submit_deployment_answer">{this.props.deployTime} minutes </span>
              <span className="submit_deployment_heading">with username </span><span className="submit_deployment_answer">{this.props.username ? this.props.username : "_________"} </span>
              <span className="submit_deployment_heading">password </span><span className="submit_deployment_answer">**hidden** </span>
              <span className="submit_deployment_heading">email address </span><span className="submit_deployment_answer">{this.props.email ? this.props.email : "_________" }. </span>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DeploymentSummary;
