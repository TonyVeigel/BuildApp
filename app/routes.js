import React from 'react';
import {Route, NotFoundRoute} from 'react-router';
import App from './components/App';
import WelcomePage from './components/WelcomePage';
import CollegeLocationPage from './components/CollegeLocationPage';
import CollegeCostPage from './components/CollegeCostPage';
import StepByStep from './components/StepByStep';

export default (
  <Route path="/college-search" handler={App}>
    <Route path='begin' handler={WelcomePage}/>
    <Route path='start' handler={StepByStep}>
      <Route path="/college-search/location" handler={CollegeLocationPage}/>
      <Route path="/college-search/cost" handler={CollegeCostPage}/>
    </Route>
  </Route>
);
