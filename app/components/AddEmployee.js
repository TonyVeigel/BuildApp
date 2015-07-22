import React from 'react';
import AddEmployeeStore from '../stores/AddEmployeeStore'
import AddEmployeeActions from '../stores/AddEmployeeActions'

class AddEmployee extends React.Component{

  constructor(props){
    super(props);
    this.state = AddEmployeeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  onChange(state){
    this.setState(state);
  }


  render(){



    return(



    )
  }
}
