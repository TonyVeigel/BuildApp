import React from 'react';
import {RouteHandler} from 'react-router';

class App extends React.Component{

  render(){

    /* RouteHandler is a component that renders the active child route handler.
     It will render one of the following components depending on the URL path
      React-router is then initialized by calling the RouteHandler component.
     */
    return(
      <div className="container main_container">
        <RouteHandler/>
      </div>
    )
  }
}

export default App;
