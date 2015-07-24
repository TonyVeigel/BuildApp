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
    this.helpBlock = '';

  }
  onUpdateHelpBlock(message){
    this.helpBlock = message;
    this.deployStatus = 'alert-info';
  }
  onAddDeploySuccess(message){
    this.helpBlock = "Depolyment was Successful";
    this.deployStatus = 'alert-success';
  }
  onAddDeployFail(message){
    this.helpBlock = "Deployment Failed";
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
    this.helpBlock = '';
    this.deployStatus = '';
  }
  onUpdatePassword(event){
    this.password = event.target.value;
  }
  onUpdateAppName(event){
    this.appName = event.target.value;
  }
}

export default alt.createStore(AddDeployStore);
