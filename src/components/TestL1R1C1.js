import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as tps from './TpsComponent';

class TestL1R1C1 extends Component {

  constructor(props) {
    super();
    this.state = { displayValue: 1 };

    setInterval(() => {
      this.setState({ displayValue: tps.tpsValue(this.state.displayValue) });
    }, 5000);
  }

  render() {
    return (
      <View
          style={[styles.sectionStyle, { backgroundColor: this.props.bColor }]}
      >
      <Text style={styles.textStyle}>
        {String(tps.tpsValue(this.state.displayValue))}
      </Text>
      </View>
  );
}
}

const styles = {
  sectionStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold'
  }
};

export default TestL1R1C1;
