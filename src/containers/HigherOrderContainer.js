import React, { Component } from 'react';

const createHoc = (ComposedComponent) => {
  class Hoc extends Component {    
    render() {
      return (
        <ComposedComponent {...this.props}
        />
      );
    }
  }
  return Hoc; 
}

export default createHoc;
