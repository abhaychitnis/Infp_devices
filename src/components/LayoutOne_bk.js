import React from 'react';
import { View, Text } from 'react-native';
import { FlexCard } from './common';
import L1R1C1 from './L1R1C1';
import L1R1C2R1 from './L1R1C2R1';
import L1R1C2R2 from './L1R1C2R2';
import L3R1 from './L3R1';
import L2R1 from './L2R1';

const LayoutOne = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 0.7 }}>
          <FlexCard>
            <L1R1C1
              myObject={props.passObject} bColor={props.colorS.colorS1}
            />
          </FlexCard>
        </View>
        <View style={{ flex: 0.3 }}>
          <FlexCard style={{ flex: 1 }}>
            <L1R1C2R1 myObject={props.passObject} bColor={props.colorS.colorS2} />
          </FlexCard>
          <FlexCard style={{ flex: 1 }}>
            <L1R1C2R2 myObject={props.passObject} bColor={props.colorS.colorS2} />
          </FlexCard>
        </View>
      </View>
      <FlexCard>
        <L2R1
          myObject={props.chartObject}
        />
      </FlexCard>
      <FlexCard>
        <L3R1
          myObject={props.mapObject}
        />
      </FlexCard>
    </View>
  );
};

export default LayoutOne;
