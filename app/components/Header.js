import React from 'react';
import Time from './Time';

class Header extends React.Component{

  render(){

      return(

        <div className="header_container">
          <div className="row">
            <div className="main_header">
              <div className="col-sm-8">
                Granite Falls In/Out Board
              </div>
              <div className="col-sm-4 ">
                <div className="time_container ">
                  <Time/>
                </div>
              </div>
            </div>
          </div>
        </div>

      )
  }
}

export default Header;
