import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { CombinedChart } from 'react-native-charts-wrapper';

import { getCombineChartData, setBarxAxis,
        nextTimeInterval } from './CombineChartComponent';

class CombineChartDisplay extends Component {

  constructor() {
    super();
    this.state = { timeValue: 0, chartData: {} };

    setInterval(() => {
      this.setState({
            chartData: getCombineChartData(this.state.timeValue, this.state.chartData),
            timeValue: nextTimeInterval(this.state.timeValue)
          });
        }, 5000);
      }

  render() {
    console.log('In render');
    return (
      <View style={styles.container}>
        <CombinedChart
          style={{ flex: 1 }}
          data={this.state.chartData}
          xAxis={setBarxAxis()}
        />
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default CombineChartDisplay;
