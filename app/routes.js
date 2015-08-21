import React from 'react';
import {Route, NotFoundRoute} from 'react-router';
import App from './components/App';
import Start from './components/StartPage';
import CollegeTypePage from './components/CollegeTypePage';

export default (
  <Route handler={App}>
    <Route path='college-search/begin' handler={CollegeTypePage}/>
    <Route path='college-search/type' handler={CollegeTypePage}/>
  </Route>
);
