import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { CombinedChart } from 'react-native-charts-wrapper';

import { getCombineChartData, setBarxAxis,
         } from './CombineChartComponent';

class CombineChartDisplay extends Component {

  render() {
    return (
      <View style={styles.container}>
        <CombinedChart
          style={{ flex: 1 }}
          drawGridLines={false}
          data={getCombineChartData()}
          xAxis={setBarxAxis()}
          yAxis={{ left: { enabled: true,
                            drawGridLines: false } }}
          yAxis={{ right: { enabled: true,
                            drawGridLines: false } }}
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
