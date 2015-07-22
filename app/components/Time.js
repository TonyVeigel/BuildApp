import React from 'react';
import moment from 'moment'


class Time extends React.Component{

  constructor(props) {
    super(props);
    this.state = {format: props.format};
  }

  render(){

    return(
      <div>
        {moment().format(this.state.format)}
      </div>
    )
  }
}

Time.propTypes = {format: React.PropTypes.string}
Time.defaultProps = {format: "MMMM D, YYYY h:m A"}
export default Time;
