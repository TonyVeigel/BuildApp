import alt from '../alt';

class DeployListActions{

  constructor(){
    this.generateActions(
      'getDeploysSuccess',
      'getDeploysFail'
    );
  }

  getDeploys(){
    $.ajax({
      type: 'GET',
      url: '/api/deploys'
    })
    .done((data) => {
      this.actions.getDeploysSuccess(data);
    })
    .fail((jqXhr) => {
      this.actions.getDeploysFail(jqXhr.responseJSON.message);
    });
  }
}

export default alt.createActions(DeployListActions);
