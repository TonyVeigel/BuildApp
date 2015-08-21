import React from 'react';
import {Link} from 'react-router';

class StartHeader extends React.Component{


  render(){
    return(
      <div className="start_header">Your Future Starts Here! <span className="stepByStep_link"><Link to='/college-search/location'>Go to Step by Step</Link></span></div>

    )
  }
}

export default StartHeader;
