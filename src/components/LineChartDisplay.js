import React, { Component } from 'react';
import { View, StyleSheet, processColor } from 'react-native';

import { LineChart } from 'react-native-charts-wrapper';

import { getLineChartData, getLineChartLegend, getLineChartMarker,
        nextTimeInterval } from './LineChartComponent';

const borderColor = processColor('red');
const backgroundColor = processColor('rgba(52, 52, 52, 0.8)');

// processColor('rgba(52, 52, 52, 0.8)'
// const chartDisplay = () => {
class LineChartDisplay extends Component {

  constructor() {
    super();
    const emptyData = {};
    //let newData = getLineChartData(0, emptyData);
    //newData = getLineChartData(1, newData);
    this.state = { timeValue: 0, chartData: { emptyData } };
    //this.setState({ timeValue: nextTimeInterval(this.state.timeValue) });

    setInterval(() => {
      this.setState({
            chartData: getLineChartData(this.state.timeValue, this.state.chartData),
            timeValue: nextTimeInterval(this.state.timeValue)
          });
        }, 100);
      }

  render() {
    return (
      <View style={styles.container}>
        <LineChart
          style={{ flex: 1 }}
          data={this.state.chartData}
          legend={getLineChartLegend()}
          marker={getLineChartMarker()}

          drawGridBackground={false}

          borderColor={borderColor}
          borderWidth={1}
          drawBorders={false}

          backgroundColor={backgroundColor}

          touchEnabled={true}
          dragEnabled={true}
          scaleEnabled={true}
          scaleXEnabled={true}
          scaleYEnabled={true}
          pinchZoom={true}
          doubleTapToZoomEnabled={false}

          dragDecelerationEnabled={true}
          dragDecelerationFrictionCoef={0.99}

          yAxis={{ right: { enabled: false,
                            drawGridLines: false } }}


          keepPositionOnRotation={false}

          xAxis={{ position: 'BOTTOM' }}

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

export default LineChartDisplay;

/*
import {
  BarChart,
} from 'react-native-chart-android';

import { getBarData } from './graphComponent';


const graphDisplay = () => {
  const myData = getBarData();
  return (
    <View style={{ flex: 1 }}>
      <BarChart data={myData} style={{ flex: 1 }} />
    </View>
    );
};

export default graphDisplay;
*/
