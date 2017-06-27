import React from 'react';
import { View } from 'react-native';
//import BoxDisplay from './BoxDisplay';

const LayoutThree = (props) => {
  const MyDisplay = props.selectObject;
  return (
    <View style={{ flex: 1 }} >
      <View style={{ flex: 0.33 }} >
        <MyDisplay />
      </View>
      <View style={{ flex: 0.67 }} >
        <View style={{ backgroundColor: 'green', flex: 1 }} />
      </View>
    </View>
  );
};

export default LayoutThree;
