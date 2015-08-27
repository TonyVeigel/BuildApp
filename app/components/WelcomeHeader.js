import React from 'react';
import {Link} from 'react-router';

class WelcomeHeader extends React.Component{

  render(){
    return(
    <div>
      <div className="start_header">
        Your Future Starts Here!
      </div>
      <div className="start_sub_header">
        <span className="stepByStep_link">
          <a className="link-no-decoration" href='/college-search/public/institution?activeTab=collegeSearch'>College Search</a> -
        </span>
        <span className="stepByStep_link">
          <a className="link-no-decoration" href='/college-search/public/institution?activeTab=programSearch'>Program Search</a> -
        </span>
        <span className="stepByStep_link">
          <a className="link-no-decoration" href='/college-search/public/institution?activeTab=mapSearch'>Location Search</a> -
        </span>
        <span className="stepByStep_link">
          <Link className="link-no-decoration" to='/college-search/guide/explained'>Guided Search</Link>
        </span>
      </div>
    </div>
    )
  }
}

export default WelcomeHeader;
