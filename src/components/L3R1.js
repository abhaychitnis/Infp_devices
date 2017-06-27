import React, { Component } from 'react';
//import { Text, View } from 'react-native';

class L3R1 extends Component {

  constructor(props) {
    super();
    this.state = { myObject: props.myObject };
  }

  render() {
    const RenderObject = this.state.myObject;
    return (
      <RenderObject />
  );
}
}

export default L3R1;
