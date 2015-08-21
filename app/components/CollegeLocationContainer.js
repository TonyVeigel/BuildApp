import React from 'react';

class CollegeLocationContainer extends React.Component{

  render(){
    return(

      <div>

      <div className="row">
        <div className="col-md-4">
          <select className="form-control" name="zipCodeRadius">
          <option value="np">No Preference</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
          <option value="200">200</option>
          </select>
        </div>

        <div className="col-md-4">
          <input className="form-control" type="text" name="zipCode" maxLength="7" placeholder="Zip/Postal Code"/>
        </div>
      </div>

      </div>


    )
  }
}

export default CollegeLocationContainer;
