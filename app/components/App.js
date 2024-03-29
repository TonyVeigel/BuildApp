import React from 'react';
import {RouteHandler} from 'react-router';
import Header from './Header';
import Navagation from './Navagation';

class App extends React.Component{

  render(){

    /* RouteHandler is a component that renders the active child route handler.
     It will render one of the following components depending on the URL path
      React-router is then initialized by calling the RouteHandler component.
     */
    return(
      <div>
        <Header/>
        <Navagation/>
        <RouteHandler/>
      </div>
    )
  }
}

export default App;
