export function getNewBoxValues(boxValues) {
  const newBoxValues = {
    c1Value: 50 + boxValues.c1Value,
    c2R1Value: boxValues.c2R1Value,
    c2R2Value: boxValues.c2R2Value
  };
  return (newBoxValues);
}
export function getBoxTitles() {
  const newBoxValues = {
    c1Title: 'Transactions per seconds',
    c2R1Title: 'Maximum TPS',
    c2R2Title: 'Minimum TPS'
  };
  return (newBoxValues);
}
/* *****************************************************************************
Following commented part is for reference. This function is an override of
default values, so all the properties don't need to be specified. Only the
properties that are to overidden need to be coded.
For Example:

const boxTitleStyles = {
c1TitleStyle: { fontSize: 48 }
}

This code will only override the font size of c1Title

*/

/*
  const boxTitleStyles = {
    c1TitleStyle: {
      flex: 1,
      color: 'grey',
      textDecorationLine: 'underline',
      textAlign: 'center',
      fontSize: 24,
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
    c2R2TitleStyle: {
      flex: 1,
      color: 'grey',
      textDecorationLine: 'underline',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold'
    }
  };
  return (boxTitleStyles);
}
*/
export function getBoxTitleStyles() {
  const boxTitleStyles = {
    c1TitleStyle: {},
    c2R1TitleStyle: { fontSize: 14 },
    c2R2TitleStyle: { fontSize: 14 }
  };
  return (boxTitleStyles);
}

/*
export function getBoxValuesStyles() {
  const boxValuesStyles = {
    c1ValueStyle: {
      color: 'darkslategrey',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 96,
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
    c2R2ValueStyle: {
      color: 'darkslategrey',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold'
    }
  };
  return (boxValuesStyles);
}
*/
export function getBoxValuesStyles() {
  const boxValuesStyles = {
    c1ValueStyle: {},
    c2R1ValueStyle: {},
    c2R2ValueStyle: {}
  };
  return (boxValuesStyles);
}

/*
export function getBoxContainerStyles() {
  const boxContainerStyles = {
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
    }
  };
  return (boxContainerStyles);
}
*/

export function getBoxContainerStyles() {
  const boxContainerStyles = {
    c1container: {},
    c2R1container: {},
    c2R2container: {}
  };
  return (boxContainerStyles);
}
