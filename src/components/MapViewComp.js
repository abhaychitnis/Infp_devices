import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


const MapViewComp = () => {
  return (
    <View style={{ flex: 1 }} >
      <View style={styles.container} >
        <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  ...StyleSheet.absoluteFillObject,
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
map: {
  ...StyleSheet.absoluteFillObject,
},
});

export default MapViewComp;
