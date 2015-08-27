import React from 'react';
import {Route, NotFoundRoute} from 'react-router';
import App from './components/App';
import WelcomePage from './components/WelcomePage';
import CollegeLocationPage from './components/CollegeLocationPage';
import CollegeCostPage from './components/CollegeCostPage';
import StepByStep from './components/StepByStep';
import CollegeAwardPage from './components/CollegeAwardPage';
import CollegeProgramPage from './components/CollegeProgramPage';
import CollegeSearchPage from './components/CollegeSearchPage';
import CollegeSearchExplained from './components/CollegeSearchExplained';

export default (
  <Route path="/college-search/guide/" handler={App}>
    <Route path='begin' handler={WelcomePage}/>
    <Route path="explained" handler={CollegeSearchExplained}/>
    <Route path='start' handler={StepByStep}>
      <Route path="/college-search/guide/location" handler={CollegeLocationPage}/>
      <Route path="/college-search/guide/cost" handler={CollegeCostPage}/>
      <Route path="/college-search/guide/award" handler={CollegeAwardPage}/>
      <Route path="/college-search/guide/program" handler={CollegeProgramPage}/>
      <Route path="/college-search/guide/search" handler={CollegeSearchPage}/>
    </Route>
  </Route>
);
