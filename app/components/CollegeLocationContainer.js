import React from 'react';
import {Link} from 'react-router'
import DataStore from '../stores/DataStore';
import DataStoreActions from '../actions/DataStoreActions';
import InstantReview from './InstantReview';

class CollegeLocationContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = DataStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    DataStore.listen(this.onChange);
  }

  componentWillUnmount(){
    DataStore.unlisten(this.onChange);
  }

  onChange(state){
    this.setState(state);
  }

  render(){
    return(
      <div>
            <h2>Location</h2>
            <p>Minnesota State Colleges and Universities is a system of 31 public colleges and universities with 54
               campuses in 47 communities throughout the state of Minnesota. By setting a distance you can limit the
               the number of institutions returned in the search results.
            </p>
            <br/>
            <div className="row">
              <div className="col-md-4">
                <label>Search within</label>
                <select value={this.state.radius} className="form-control"
                  onChange={DataStoreActions.updateRadius} >
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
                <label>miles from</label>
                <input onChange={DataStoreActions.updateZipCode} value={this.state.miles} className="form-control" type="text" maxLength="7" placeholder="Zip/Postal Code"/>
              </div>
            </div>

            <div className="row">
              <br/>
              <div className="btn btn-success pull-right">
                <Link className="btn-no-decoration" to="/college-search/cost">Cost -></Link>
            </div>
          </div>
      </div>
    )
  }
}

export default CollegeLocationContainer;
