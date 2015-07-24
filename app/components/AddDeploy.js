import React from 'react';
import AddDeployStore from '../stores/AddDeployStore';
import AddDeployActions from '../actions/AddDeployActions';
import DeploymentSummary from './DeploymentSummary';
import MessageCenter from './MessageCenter';

class AddDeploy extends React.Component{

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

  handleSubmit(event){

    event.preventDefault();

    var email = this.state.email;
    var password = this.state.password;
    var username = this.state.username.trim();
    var deployTime = this.state.deployTime;
    var localLoc = this.state.localLoc;
    var server = this.state.server;
    var environment = this.state.environment;
    var appName = this.state.appName;

    if(!username){
      AddDeployActions.updateHelpBlock("Please enter a username.");
      this.refs.usernameTextField.getDOMNode().focus();
    }
    if(username){
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
            <div className="col-md-7">
              <div className='panel panel-default'>
                <div className='panel-heading'>Deployment</div>
                <div className='panel-body'>

                  <div className="row">
                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>App Name:</label>
                        <input type='text' className='form-control' ref='appNameTextField' value={this.state.appName}
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
                        <input type='text' className='form-control' ref='localLocTextField' value={this.state.localLoc}
                          onChange={AddDeployActions.updateLocalLoc} />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Server:</label>
                        <input type='text' className='form-control' ref='serverTextField' value={this.state.server}
                          onChange={AddDeployActions.updateServer} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Deploy Time (Minutes):</label>
                        <input type='text' className='form-control' ref='deployTimeTextField' value={this.state.deployTime}
                          onChange={AddDeployActions.updateDeployTime} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Username:</label>
                        <input type='text' className='form-control' ref='usernameTextField' value={this.state.username}
                          onChange={AddDeployActions.updateUsername} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Password:</label>
                        <input type='password' className='form-control' ref='passwordTextField' value={this.state.password}
                          onChange={AddDeployActions.updatePassword} />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={'form-group '}>
                        <label className='control-label'>Email Address:</label>
                        <input type='text' className='form-control' ref='emailTextField' value={this.state.email}
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
            <div className="col-md-5">
              <MessageCenter/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddDeploy;
