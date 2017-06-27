import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import { setContext } from '../actions';

class LayoutOne extends Component {

  onRowPress = (props) => {
      let context;
      switch (props) {
        case 'L1Display' :
          context = 'L1Display';
          break;
        case 'L2Display' :
          context = 'L2Display';
          break;
        case 'L3Display' :
          context = 'L3Display';
          break;
        default :
          context = 'L1Display';
          break;
      }
      this.props.setContext({ layout: 'LayoutThree', context });
    };
  render() {
    const L1Display = this.props.boxObject;
    const L2Display = this.props.chartObject;
    const L3Display = this.props.mapObject;

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.onRowPress.bind(this, 'L1Display')} style={{ flex: 1 }} >
          <L1Display />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onRowPress.bind(this, 'L2Display')} style={{ flex: 1 }} >
          <L2Display />
          </TouchableOpacity>
        <TouchableOpacity onPress={this.onRowPress.bind(this, 'L3Display')} style={{ flex: 1 }} >
          <L3Display />
          </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ lone }) => {
  const { layout, context } = lone;
  return { layout, context };
};

export default connect(mapStateToProps, { setContext })(LayoutOne);
