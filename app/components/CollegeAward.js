import React from 'react';
import {Link} from 'react-router';
import DataStoreActions from '../actions/DataStoreActions';

class CollegeAward extends React.Component{

  render(){

      let awardOptions = this.props.awardList.map((award, i) =>{
        return(
        <option key={i} value={award.degreeLevel}>{award.longDesc}</option>
        )
    });

    return(
      <div>
      <div className="row">
        <div className="col-md-12">
        <h2>Award/Degree</h2>
          <p>Minnesota State Colleges and Universities is a system of 31 public colleges and universities with 54
             campuses in 47 communities throughout the state of Minnesota. By setting a distance you can limit the
             the number of institutions returned in the search results.
          </p>
        <br/>
          <div className="row">
            <div className="col-md-6">
              <label>Award</label>
                <select value={this.props.award} className="form-control"
                  onChange={DataStoreActions.updateAward}>
                  <option value="No Preference">No Preference</option>
                  {awardOptions}
                </select>
            </div>
          </div>
        </div>
        </div>

        <br/>
        <div className="row">
          <div className="col-md-12">
          <Link className="btn-no-decoration" to="/college-search/program">
            <div className="btn btn-success pull-right">
            Program &rarr;
            </div>
          </Link>
          <Link className="btn-no-decoration" to="/college-search/cost">
            <div className="btn btn-success pull-left">
              &larr; Cost
            </div>
          </Link>
        </div>
        </div>
      </div>
    )
  }

}

export default CollegeAward;
