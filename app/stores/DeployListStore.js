import alt from '../alt';
import DeployListActions from '../actions/DeployListActions'


class DeployListStore {

  constructor(){
    this.bindActions(DeployListActions);
    this.deploys = [];
  }
  onGetDeploysSuccess(data){
    this.deploys = data;
  }
  onGetDeploysFail(data){

  }
}

export default alt.createStore(DeployListStore);
