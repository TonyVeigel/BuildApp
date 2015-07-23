import React from 'react';
import {Route, NotFoundRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddDeploy from './components/AddDeploy';

export default (
  <Route handler={App}>
    <Route path='/' handler={Home}/>
    <Route path='/add' handler={AddDeploy}/>
    <Route path='/review' handler={ReviewDeployments}/>
  </Route>
);
