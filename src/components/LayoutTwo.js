import React from 'react';
import { View } from 'react-native';

const LayoutTwo = (props) => {
  const L1Display = props.boxObject;
  const L2Display = props.chartObject;
  const L3Display = props.mapObject;
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row', flex: 1 }} >
        <View style={{ flex: 0.1 }} >
          <View style={{ flex: 1, backgroundColor: 'green' }} />
        </View>
        <View style={{ flex: 0.9 }} >
          <L1Display />
        </View>
      </View>

      <View style={{ flexDirection: 'row', flex: 1 }} >
        <View style={{ flex: 0.1 }} >
          <View style={{ flex: 1, backgroundColor: 'blue' }} />
        </View>
        <View style={{ flex: 0.9 }} >
          <L2Display />
        </View>
      </View>

      <View style={{ flexDirection: 'row', flex: 1 }} >
        <View style={{ flex: 0.1 }} >
          <View style={{ flex: 1, backgroundColor: 'yellow' }} />
        </View>
        <View style={{ flex: 0.9 }} >
          <L3Display />
        </View>
      </View>

    </View>
  );
};

export default LayoutTwo;
