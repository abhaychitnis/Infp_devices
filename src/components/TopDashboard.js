import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';
import LayoutThree from './LayoutThree';
import MapViewComp from './MapViewComp';
import BoxDisplay from './BoxDisplay';

//import LineChartDisplay from './LineChartDisplay';
import { curTpsValue, maxTpsValue, minTpsValue } from './TpsComponent';
//import BarChartDisplay from './BarChartDisplay';
import CombineChartDisplay from './CombineChartDisplay';

class TopDashboard extends Component {
  render() {
    const colorS = {
        colorS1: 'white',
        colorS2: 'white',
        colorS3: 'red',
        colorS4: 'yellow',
        colorS5: 'red'
      };
    const curTpsObject = {
        cbFunction_1: curTpsValue,
        cbFunction_2: maxTpsValue,
        cbFunction_3: minTpsValue,
        displayTitle_1: 'Transactions per Second',
        displayTitle_2: 'Max TPS',
        displayTitle_3: 'Min TPS'
      };
    const mapObject = {
      mapFunction: MapViewComp
    };
    const chartObject = {
      chartFunction: CombineChartDisplay
    };
    const boxObject = {
      boxFunction: BoxDisplay
    };
    let selectObject;
    switch (this.props.context) {
      case 'L1Display' :
        selectObject = boxObject.boxFunction;
        break;
      case 'L2Display' :
        selectObject = chartObject.chartFunction;
        break;
      case 'L3Display' :
        selectObject = mapObject.mapFunction;
        break;
      default :
        selectObject = boxObject.boxFunction;
    }
    switch (this.props.layout) {
      case 'LayoutOne' :
        return (
          <View style={{ flex: 1 }}>
            <LayoutOne
              colorS={colorS}
              passObject={curTpsObject}
              mapObject={mapObject.mapFunction}
              chartObject={chartObject.chartFunction}
              boxObject={boxObject.boxFunction}
            />
          </View>
        );
      case 'LayoutThree' :
        return (
          <View style={{ flex: 1 }}>
            <LayoutThree
              colorS={colorS}
              selectObject={selectObject}
            />
          </View>
        );
      default :
        return (
          <View style={{ flex: 1 }}>
            <LayoutOne
              colorS={colorS}
              passObject={curTpsObject}
              mapObject={mapObject.mapFunction}
              chartObject={chartObject.chartFunction}
              boxObject={boxObject.boxFunction}
            />
          </View>
        );
    }
  }
}

const mapStateToProps = ({ lone }) => {
  const { currentLayout, currentContext } = lone;
  return ({ layout: currentLayout, context: currentContext });
};

export default connect(mapStateToProps, null, null,
        { pure: false })(TopDashboard);
