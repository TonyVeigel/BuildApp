import React from 'react';
import DeployListStore from '../stores/DeployListStore';
import DeployListActions from '../actions/DeployListActions';

class DeployList extends React.Component {

  constructor(props){
    super(props);
    this.state = DeployListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    DeployListStore.listen(this.onChange);
    DeployListActions.getDeploys();
  }

  componentWillUnmount(){
    DeployListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    let deployList = this.state.deploys.map((deploy, index) => {
      return(
        <div key={deploy.deployId} className="panel panel-default">
          <div className="row">
            <div className="col-md-2">
              {deploy.user}
            </div>
            <div className="col-md-2">
              {deploy.appName}
            </div>
            <div className="col-md-2">
              {deploy.environment}
            </div>
            <div className="col-md-2">
              {deploy.time}
            </div>
            <div className="col-md-2">
              {deploy.status}
            </div>
            <div className="col-md-2">
              {deploy.reason}
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className='container deployment_app-container'>
        <div className="row">
          <div className="col-md-2">
            User
          </div>
          <div className="col-md-2">
            App
          </div>
          <div className="col-md-2">
            Environment
          </div>
          <div className="col-md-2">
            Time
          </div>
          <div className="col-md-2">
            Status
          </div>
          <div className="col-md-2">
            Reason
          </div>
        </div>
        <div className='list-group'>
          {deployList}
        </div>
      </div>
    );
  }
}

export default DeployList;
