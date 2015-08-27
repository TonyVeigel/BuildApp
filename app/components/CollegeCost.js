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
            <p>Expect to pay roughly 1/3 the cost of private trade schools, 1/2 the cost of other public universities and 1/5 the cost of
               private colleges and universities in Minnesota.
            </p>
            <br/>
            <label>Total Cost</label>
            <div className="row">
              <div className="col-xs-4">
                <input onChange={DataStoreActions.updateCost} value={this.props.cost} className="form-control" type="number" step="500" placeholder="Minimum 5100"/>
              </div>
            </div>
            <a target="_blank" href="http://www.mnscu.edu/online/financialaid.html">Cost calculators & financial aid</a>
            <div className="validationError">{this.props.costValidationError}</div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-12">
            <Link className="btn-no-decoration" to="/college-search/guide/award">
              <div className="btn btn-success pull-right">
                Award &rarr;
              </div>
            </Link>
            <Link className="btn-no-decoration" to="/college-search/guide/location">
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
