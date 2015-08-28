import React from 'react';


class LocationSearchExample extends React.Component{

  render(){
    return(
      <div>
      <h3><a target="_blank" href={this.props.link  + "&activeTab=mapSearch"}>Location Search</a></h3>
      <p>
        Location Search will return a list of all colleges which will be indicated by a marker on a map. This is an OR search, results will include all college with a match percentage
        indicating how each college matches your criteria. To view college information and what matched or did not match, simply click on the map marker.
        <img className="img img-responsive" src="/college-search/assets/map-search-example.png"/>
      </p>
      </div>
    )
  }
}

export default LocationSearchExample;
