import React, { Component } from 'react';
import { View, StyleSheet, processColor } from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';

import { getBarChartData, getBarChartLegend, setBarxAxis,
        nextTimeInterval } from './BarChartComponent';

const borderColor = processColor('red');
const backgroundColor = processColor('rgba(52, 52, 52, 0.8)');

// processColor('rgba(52, 52, 52, 0.8)'
// const chartDisplay = () => {
class BarChartDisplay extends Component {

  constructor() {
    super();
    const emptyData = {};
    //let newData = getLineChartData(0, emptyData);
    //newData = getLineChartData(1, newData);
    this.state = { timeValue: 0, chartData: getBarChartData(0, {}) };
    //this.setState({ timeValue: nextTimeInterval(this.state.timeValue) });

    setInterval(() => {
      this.setState({
            chartData: getBarChartData(this.state.timeValue, this.state.chartData),
            timeValue: nextTimeInterval(this.state.timeValue)
          });
        }, 5000);
      }

  render() {
    return (
      <View style={styles.container}>
        <BarChart
          style={{ flex: 1 }}
          data={this.state.chartData}
          legend={getBarChartLegend()}
          gridBackgroundColor={processColor('#ffffff')}
          drawBarShadow={false}
          drawValueAboveBar
          scaleXEnabled
          scaleYEnabled
          drawHighlightArrow
          xAxis={setBarxAxis([], [])}
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

export default BarChartDisplay;
