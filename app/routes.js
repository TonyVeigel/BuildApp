import React from 'react';
import {Route, NotFoundRoute} from 'react-router';
import App from './components/App';
import AddDeploy from './components/AddDeploy';
import DeployList from './components/DeployList';

export default (
  <Route handler={App}>
    <Route path='/add' handler={AddDeploy}/>
    <Route path='/list' handler={DeployList}/>
  </Route>
);
