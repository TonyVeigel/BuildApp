import alt from '../alt';
import AddDeployActions from '../actions/AddDeployActions'


class AddDeployStore {

  constructor(){

    this.bindActions(AddDeployActions);
    this.email = '';
    this.environment = 'webappdev';
    this.localLoc = '';
    this.server = '';
    this.deployTime = '20';
    this.username = '';
    this.password = '';
    this.appName = '';
    this.deployStatus = '';
    this.deployMessage = '';

  }
  onAddDeploySuccess(message){
    this.deployMessage = "Depolyment was Successful";
    this.deployStatus = 'alert-success';
  }
  onAddDeployFail(message){
    this.deployMessage = "Deployment Failed";
    this.deployStatus = 'alert-danger'
  }
  onUpdateDeployStatus(message){
    this.deployStatus = message;
  }
  onUpdateDeployMessage(message){
    this.deployMessage = message;
  }
  onUpdateEmail(event){
    this.email = event.target.value;
  }
  onUpdateEnvironment(event){
    this.environment = event.target.value;
  }
  onUpdateLocalLoc(event){
    this.localLoc = event.target.value;
  }
  onUpdateServer(event){
    this.server = event.target.value;
  }
  onUpdateDeployTime(event){
    this.deployTime = event.target.value;
  }
  onUpdateUsername(event){
    this.username = event.target.value;
  }
  onUpdatePassword(event){
    this.password = event.target.value;
  }
  onUpdateAppName(event){
    this.appName = event.target.value;
  }
}

export default alt.createStore(AddDeployStore);
