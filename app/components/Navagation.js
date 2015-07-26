import React from 'react';
import {Link} from 'react-router';

class Navagation extends React.Component{

  render(){
    return(

      <nav role="navigation" className="navbar navbar-default">
          <div class="navbar-header">
              <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
          </div>
          <div id="navbarCollapse" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                  <li><Link to='/add'>Home</Link></li>
                  <li><Link to='/list'>Review Deploys</Link></li>
              </ul>
          </div>
      </nav>
    )
  }
}

export default Navagation;
