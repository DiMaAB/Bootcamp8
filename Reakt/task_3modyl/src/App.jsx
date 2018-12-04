import React, { Component } from 'react';

class App extends Component {
  state={
    propertis:[],
    template:[]
  }
  componentDidMount(){
    fetch('').then(response=>response.json())
    .then(date=>this.newProperty(date))
  }
  newProperty(date){

  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
