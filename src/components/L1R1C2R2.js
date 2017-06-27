import React, { Component } from 'react';
import { Text, View } from 'react-native';

class L1R1C2R2 extends Component {

  constructor(props) {
    super();
    this.state = { displayValue: 1 };

    setInterval(() => {
      this.setState({ displayValue: props.myObject.cbFunction_3() });
    }, 5000);
  }

  render() {
    return (
      <View
          style={[styles.sectionStyle, { backgroundColor: this.props.bColor }]}
      >
        <Text
          style={{ fontSize: 12, textDecorationLine: 'underline', color: 'grey' }}
        >
          {this.props.myObject.displayTitle_3}</Text>
        <Text style={styles.textStyle}>
          {String(this.props.myObject.cbFunction_3())}
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
    color: 'darkslategrey',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold'
  }
};

export default L1R1C2R2;
