import React from 'react';


class CollegeSearchExample extends React.Component{

  render(){
    return(
      <div>
      <h3> <a target="_blank" href={this.props.link + "&activeTab=collegeSearch"}>College Search</a></h3>
      <p>
        College Search will return a list of all colleges. This is an OR search, results will include all colleges with
        a match percentage indicating how each college matches your criteria. Example:
        <img className="img img-responsive" src="/college-search/assets/college-search-example.png"/>
        With this example Bemidji State University was a 75% match. To see what matched or did not match, simply
        look under the college name and you will find the matching and non-matching categories.
      </p>
      </div>
    )
  }
}

export default CollegeSearchExample;
