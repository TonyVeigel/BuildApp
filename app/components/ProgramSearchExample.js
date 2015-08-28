import React from 'react';


class ProgramSearchExample extends React.Component{

  render(){
    return(
      <div>
      <h3><a target="_blank" href={this.props.link  + "&activeTab=programSearch"}>Program Search</a></h3>
      <p>
        Program Search will return a list of programs. Program search is an AND search based on <strong>program area</strong>, <strong>program</strong>, <strong>delivery</strong> and <strong>award</strong>. In addition, a list of colleges with a match percentage will be displayed under the programs indicating
        which colleges offer that program. Example:
        <img className="img img-responsive" src="/college-search/assets/program-search-example.png"/>
        With this example Business Administration matched the search criteria. As well, the program is offered at
        Southwest Minnesota State University and Winona State University.
      </p>
      </div>
    )
  }
}

export default ProgramSearchExample;
