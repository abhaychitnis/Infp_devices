import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Bar } from 'react-native-pathjs-charts';

import { getBarData, getBarOptions } from './graphComponent';

const graphDisplay = () => {
  console.log('Inside graphDisplay');
  return (
    <View style={styles.container}>
      <Bar data={getBarData()} options={getBarOptions()} accessorKey='v' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

export default graphDisplay;

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
