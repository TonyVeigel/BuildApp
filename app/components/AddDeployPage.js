import React from 'react';
import AddDeployActions from '../actions/AddDeployActions';
import DeploymentSummary from './DeploymentSummary';
import MessageCenter from './MessageCenter';


class AddDeployPage extends React.Component{


  constructor(props){
    super(props);
    this.state= {
       email : null;
       password : null;
       username : null;
       deployTime : null;
       localLoc : null;
       server : null;
       environment : null;
       appName : null;
    }
  }

  handleSubmit(event){

    event.preventDefault();

    var email = this.state.email;
    var password = this.state.password.trim();
    var username = this.state.username.trim();
    var deployTime = this.state.deployTime;
    var localLoc = this.state.localLoc.trim();
    var server = this.state.server;
    var environment = this.state.environment;
    var appName = this.state.appName.trim();

    if(!password){
      AddDeployActions.updateHelpBlock("Please enter a password.");
      this.refs.passwordTextField.getDOMNode().focus();
    }
    if(!username){
      AddDeployActions.updateHelpBlock("Please enter a username.");
      this.refs.usernameTextField.getDOMNode().focus();
    }
    if(!localLoc){
      AddDeployActions.updateHelpBlock("Please enter a file location.");
      this.refs.localLocTextField.getDOMNode().focus();
    }
    if(!appName){
      AddDeployActions.updateHelpBlock("Please enter a app name.");
      this.refs.appNameTextField.getDOMNode().focus();
    }
    if(username && password && localLoc && appName){
      AddDeployActions.updateHelpBlock("Deploy is in process. Please wait.....");
      AddDeployActions.addDeploy(email, environment, localLoc, server, appName, deployTime, username, password);
    }
  }

  render(){

    return(

      <div className="add_deployment_container container">
        <div className="row">

          <DeploymentSummary/>

          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="col-md-6">
              <div className='panel panel-default'>
                <div className='panel-heading'>Deployment</div>
                <div className='panel-body'>

                  <div className="row">
                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>App Name:</label>
                        <input type='text' className='form-control' ref='appNameTextField' value={this.props.appName}
                          onChange={AddDeployActions.updateAppName} autoFocus/>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Environment:</label>
                        <select name="environment" className='form-control' ref='environmentSelect'
                          onChange={AddDeployActions.updateEnvironment} >
                          <option value="webappdev">webappdev</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>File Location:</label>
                        <input type='text' className='form-control' ref='localLocTextField' value={this.props.localLoc}
                          onChange={AddDeployActions.updateLocalLoc} />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Server:</label>
                        <input type='text' className='form-control' ref='serverTextField' value={this.props.server}
                          onChange={AddDeployActions.updateServer} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Deploy Time (Minutes):</label>
                        <input type='text' className='form-control' ref='deployTimeTextField' value={this.props.deployTime}
                          onChange={AddDeployActions.updateDeployTime} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Username:</label>
                        <input type='text' className='form-control' ref='usernameTextField' value={this.props.username}
                          onChange={AddDeployActions.updateUsername} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Password:</label>
                        <input type='password' className='form-control' ref='passwordTextField' value={this.props.password}
                          onChange={AddDeployActions.updatePassword} />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Email Address:</label>
                        <input type='text' className='form-control' ref='emailTextField' value={this.props.email}
                          onChange={AddDeployActions.updateEmail} />
                      </div>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button type='submit' className='btn btn-primary'>Deploy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <MessageCenter/>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default AddDeployPage;
