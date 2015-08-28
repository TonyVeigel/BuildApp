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
            <p>Minnesota State Colleges and Universities offers many degree options including:
            </p>
            <ul>
              <li>Certificates: Focus on one discipline and earn a certificate in less than a year.</li>
              <li>Diploma: </li>
              <li>Associate: </li>
              <li>Baccalaureate: </li>
              <li>Post-Baccalaureate Certificate: </li>
              <li>Masters: </li>
              <li>Specialist, Advanced Prof, MFA, JD: </li>
              <li>Doctorate: </li>
            </ul>
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
            <Link className="btn-no-decoration" to="/college-search/guide/program">
              <div className="btn btn-success pull-right">
                Program &rarr;
              </div>
            </Link>
            <Link className="btn-no-decoration" to="/college-search/guide/cost">
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
