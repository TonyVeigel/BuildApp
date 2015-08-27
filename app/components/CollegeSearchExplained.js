import React from 'react';
import {Link} from 'react-router';

class CollegeSearchExplained extends React.Component{

  render(){
    return(
      <div>
        <div className="row explained_container">
          <div className="col-md-8">
            <h2>Guided Search</h2>
            <p>The 31 Minnesota State Colleges and Universities offer excellent, affordable education in 47 communities across the state.
              You can stay close to home or explore a new region
              of Minnesota while gaining the knowledge and career skills that fit your interests. With more than 5,400 educational programs,
              the Minnesota State Colleges and Universities offer many choices at a great value.
              <br/>
              <br/>
              <h4>About Guided Search</h4>
              The guided search will ask a series of questions to help you find the colleges or programs that are right for you. If you do not want to
              answer a given question, simply move on to the next category.
            </p>
            <br/>
            <div className="row">
              <div className="col-md-12">
                <Link className="btn-no-decoration" to="/college-search/guide/location">
                  <div className="btn btn-success">
                    Begin your college search &rarr;
                  </div>
                </Link>
              </div>
            </div>
            <br/>
          </div>
          <div className="hidden-sm hidden-xs col-md-4">
            <img src="/college-search/assets/woman-smiling.jpg"/>
          </div>
        </div>
      </div>
    )
  }
}

export default CollegeSearchExplained;
