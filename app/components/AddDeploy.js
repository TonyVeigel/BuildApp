  import React from 'react';
  import AddDeployStore from '../stores/AddDeployStore'
  import AddDeployActions from '../actions/AddDeployActions'

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

      var email = this.state.email;
      var password = this.state.password;
      var username = this.state.username;
      var deployTime = this.state.deployTime;
      var localLoc = this.state.localLoc;
      var server = this.state.server;
      var environment = this.state.environment;
      var appName = this.state.appName;

      AddDeployActions.updateDeployStatus("alert-info");
      AddDeployActions.updateDeployMessage("Deploy is in process. Please wait.....");

      event.preventDefault();

      AddDeployActions.addDeploy(email, environment, localLoc, server, appName, deployTime, username, password);

    }

    render(){

      return(

        <div className="add_deployment_container container">


          <div className={'alert ' + this.state.deployStatus}>{this.state.deployMessage}</div>

          <div className="row">
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
                          <label className='control-label'>War Location:</label>
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
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className='panel panel-default'>
                <div className='panel-heading'>Deployment Summary</div>
                  <div className='panel-body'>


                      <div className="submit_deployment_heading">I will be deploying: <br/> <span className="submit_deployment_answer">{this.state.appName}</span></div>
                      <div className="submit_deployment_heading">on: <br/> <span className="submit_deployment_answer">{this.state.environment}</span> </div>
                      <div className="submit_deployment_heading">transfering a local file from: <br/> <span className="submit_deployment_answer">{this.state.localLoc} </span></div>
                      <div className="submit_deployment_heading">to a destination of: <br/><span className="submit_deployment_answer">/apps/build/{this.state.appName}/devstaging</span> </div>
                      <div className="submit_deployment_heading">on server: <br/><span className="submit_deployment_answer">{this.state.server}</span> </div>
                      <div className="submit_deployment_heading">in:  <br/><span className="submit_deployment_answer">{this.state.deployTime} minutes</span>  </div>
                      <div className="submit_deployment_heading">with username:  <br/><span className="submit_deployment_answer">{this.state.username}</span></div>
                      <div className="submit_deployment_heading">password:  <br/><span className="submit_deployment_answer">**hidden**</span> </div>
                      <div className="submit_deployment_heading">email address:  <br/><span className="submit_deployment_answer">{this.state.email}</span></div>
                      <br/>
                      <button type='submit' className='btn btn-primary'>Deploy</button>

                  </div>
                </div>
              </div>
              </form>

          </div>
        </div>
      )
    }
  }

  export default AddDeploy;
