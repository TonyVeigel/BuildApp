import React from 'react';
import {Link} from 'react-router';
import DataStoreActions from '../actions/DataStoreActions';

class CollegeProgram extends React.Component{

  render(){

    let categoryOptions = this.props.categoryList.map((category, i) =>{
      return(
        <option key={i} value={category.id}>{category.longDesc}</option>
      )
    });

    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2>Program</h2>
            <p>Minnesota State Colleges and Universities is a system of 31 public colleges and universities with 54
              campuses in 47 communities throughout the state of Minnesota. By setting a distance you can limit the
              the number of institutions returned in the search results.
            </p>
            <br/>
            <div className="row">
              <div className="col-md-6">
                <label>Program Area</label>
                <select value={this.props.category} className="form-control"
                  onChange={DataStoreActions.updateCategory}>
                  <option value="No Preference">No Preference</option>
                  {categoryOptions}
                </select>
              </div>
              <div className="col-md-6">
                <label>Delivery</label>
                <select value={this.props.delivery} className="form-control"
                  onChange={DataStoreActions.updateDelivery}>
                  <option value="">No Preference</option>
                  <option value="L">Face-to-face</option>
                  <option value="O">Fully online</option>
                  <option value="B">Partially online</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-12">
            <Link className="btn-no-decoration" to="/college-search/guide/search">
              <div className="btn btn-success pull-right">
                Search &rarr;
              </div>
            </Link>
            <Link className="btn-no-decoration" to="/college-search/guide/award">
              <div className="btn btn-success pull-left">
                &larr; Award
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }

}

export default CollegeProgram;
