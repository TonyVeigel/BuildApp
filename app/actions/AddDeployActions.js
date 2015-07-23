import alt from '../alt';

class AddDeployActions{

  constructor(){
    this.generateActions(
      'addDeploySuccess',
      'addDeployFail',
      'updateEmail',
      'updateEnvironment',
      'updateLocalLoc',
      'updateServer',
      'updateDeployTime',
      'updateUsername',
      'updatePassword',
      'updateAppName',
      'updateDeployStatus',
      'updateDeployMessage'
    );
  }

    addDeploy(email, environment, localLoc, server, appName, deployTime, username, password){
      $.ajax({
        type: 'POST',
        url: '/api/deploy',
        data: { email: email,
          environment: environment,
          localLoc: localLoc,
          server: server,
          appName: appName,
          deployTime: deployTime,
          username: username,
          password: password
         }
      })
     .done((data) => {
       this.actions.addDeploySuccess(data.message);
     })
     .fail((jqXhr) => {
       this.actions.addDeployFail(jqXhr.responseJSON.message);
     });
    }
  }

  export default alt.createActions(AddDeployActions);
