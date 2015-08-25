import React from 'react';
import {Link} from 'react-router';
import DataStoreActions from '../actions/DataStoreActions';

class CollegeCost extends React.Component{

  render(){
    return(
      <div>
      <div className="row">
        <div className="col-md-12">
        <h2>Cost</h2>
        <p>Minnesota State Colleges and Universities is a system of 31 public colleges and universities with 54
           campuses in 47 communities throughout the state of Minnesota. By setting a distance you can limit the
           the number of institutions returned in the search results.
        </p>
        <br/>
        <label>Total Cost</label>
        <div className="row">
          <div className="col-xs-4">
            <input onChange={DataStoreActions.updateCost} value={this.props.cost} className="form-control" type="number" maxLength="7" placeholder="5000"/>            
          </div>
        </div>
        </div>
        </div>

        <br/>
        <div className="row">
          <div className="col-md-12">
          <Link className="btn-no-decoration" to="/college-search/award">
            <div className="btn btn-success pull-right">
            Award &rarr;
            </div>
          </Link>
          <Link className="btn-no-decoration" to="/college-search/location">
            <div className="btn btn-success pull-left">
              &larr; Location
            </div>
          </Link>
        </div>
        </div>
      </div>
    )
  }

}

export default CollegeCost;
