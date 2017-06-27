import React, { Component } from 'react';
//import { nextTimeInterval } from './LineChartComponent';
//import { Text, View } from 'react-native';

class L2R1 extends Component {

  constructor(props) {
    super(props);
    this.state = { myObject: props.myObject };
  }
/*
    setInterval(() => {
      this.setState({
        timeValue: nextTimeInterval(this.state.timeValue)
      });
    }, 1000);

    console.log('After interval');
  }
*/
  render() {
    const RenderObject = this.state.myObject;
    return (
      <RenderObject />
  );
}
}

export default L2R1;
