import React from 'react';
import { Text, View } from 'react-native';

const BoxView = (props) => {
  //console.log(props);
  const c1Title = props.boxTitles.c1Title || 'C1 Title';
  const c1Value = props.boxValues.c1Value || String(0);
  const c2R1Title = props.boxTitles.c2R1Title || 'C2R1 Title';
  const c2R1Value = props.boxValues.c2R1Value || String(0);
  const c2R2Title = props.boxTitles.c2R2Title || 'C2R2 Title';
  const c2R2Value = props.boxValues.c2R2Value || String(0);
  const {
          c1container, c2R1container, c2R2container,
          c1TitleStyle, c1ValueStyle,
          c2R1TitleStyle, c2R1ValueStyle,
          c2R2TitleStyle, c2R2ValueStyle
        } = styles;
  return (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={[c1container, props.boxContainerStyles.c1container, { flex: 0.7 }]}>
          <Text
            style={[c1TitleStyle, props.boxTitleStyles.c1TitleStyle]}
          >
            {c1Title}</Text>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[c1ValueStyle, props.boxValuesStyles.c1ValueStyle]}>
              {c1Value}
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.3 }}>
          <View style={[c2R1container, props.boxContainerStyles.c2R1container]}>
            <Text
              style={[c2R1TitleStyle, props.boxTitleStyles.c2R1TitleStyle]}
            >
              {c2R1Title}</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={[c2R1ValueStyle, props.boxValuesStyles.c2R1ValueStyle]}>
                {c2R1Value}
              </Text>
            </View>
          </View>
          <View style={[c2R2container, props.boxContainerStyles.c2R2container]}>
            <Text
              style={[c2R2TitleStyle, props.boxTitleStyles.c2R2TitleStyle]}
            >
              {c2R2Title}</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={[c2R2ValueStyle, props.boxValuesStyles.c2R2ValueStyle]}>
                {c2R2Value}
              </Text>
            </View>
          </View>
        </View>
      </View>

  );
};

const styles = {
  c1container: {
      flex: 1,
      backgroundColor: 'cornsilk',
      borderWidth: 0,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 0,
      marginRight: 2,
      marginTop: 2
  },
  c2R1container: {
      flex: 1,
      backgroundColor: 'cornsilk',
      borderWidth: 0,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 2
  },
  c2R2container: {
      flex: 1,
      backgroundColor: 'cornsilk',
      borderWidth: 0,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 2
  },
  c1TitleStyle: {
    flex: 1,
    color: 'grey',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c1ValueStyle: {
    color: 'darkslategrey',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 96,
    fontWeight: 'bold'
  },
  c2R1TitleStyle: {
    flex: 1,
    color: 'grey',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2R1ValueStyle: {
    color: 'darkslategrey',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2R2TitleStyle: {
    flex: 1,
    color: 'grey',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  c2R2ValueStyle: {
    color: 'darkslategrey',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  }
};

export default BoxView;
