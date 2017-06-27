import { processColor } from 'react-native';
/*
lineData: setLineData(),
bubbleData: setBubbleData(),
candleData: setCandleData(),
scatterData: setScatterData()
*/
export function getCombineChartData() {
  const data = {
    barData: {},
    lineData: setLineData(),
    bubbleData: {},
    candleData: {},
    scatterData: {}
  };
  return (data);
  }

const setBarData = () => {
  console.log('In Bar Data');
  const data = { dataSets: [{
    values: setBarDataValues(1),
    label: 'Company B',
    config: {
      drawValues: false,
      colors: [processColor('red')]
    }
  }] };

  return (data);
};

const setLineData = () => {
  console.log('In Line Data');
  const data = {
    dataSets: [{
      values: setLineDataValues(1),
      label: 'Sine function',
      config: {
        drawValues: false,
        colors: [processColor('green')],
        mode: 'CUBIC_BEZIER',
        drawCircles: false,
        lineWidth: 2,
      }
    }, {
      values: setLineDataValues(2),
      label: 'Cosine function',
      config: {
        drawValues: false,
        colors: [processColor('blue')],
        mode: 'CUBIC_BEZIER',
        drawCircles: false,
        lineWidth: 2,
      }
    }],
  };

  return (data);
};

const setBubbleData = () => {
  console.log('In Bubble Data');
  const data = {
    dataSets: [{
      values: setBubbleDataValues(1),
      label: 'Company A',
      config: {
        drawValues: false,
        colors: [processColor('pink')],
      }
    }],
  };

  return (data);
};

const setCandleData = () => {
  const data = {
    dataSets: [{
      values: setCandleDataValues(1),
      label: 'Company A',

      config: {
        drawValues: false,

        highlightColor: processColor('darkgray'),

        shadowColor: processColor('black'),
        shadowWidth: 1,
        shadowColorSameAsCandle: true,
        increasingColor: processColor('yellow'),
        increasingPaintStyle: 'fill',
        decreasingColor: processColor('green')
      }
    }],
  };
  return (data);
};

const setScatterData = () => {
  console.log('In Scatter Data');
  const data = {
    dataSets: [{
      values: setScatterDataValues(1),
      label: 'Company A',
      config: {
        colors: [processColor('purple')],
        drawValues: false,
        scatterShape: 'SQUARE',
      }

    }, {
      values: setScatterDataValues(2),
      label: 'Company B',

      config: {
        drawValues: false,
        colors: [processColor('grey')],
        scatterShape: 'CIRCLE',
      }
    }, {
      values: setScatterDataValues(3),
      label: 'Company C',

      config: {
        drawValues: false,
        colors: [processColor('brown')],
        scatterShape: 'TRIANGLE',
      }
    }],
  };
return (data);
};

const setBarDataValues = (ind) => {
  let dataValues = [];
  switch (ind) {
    case 1:
      dataValues = [40, 5, 50, 23, 79];
      break;
    case 2:
      dataValues = [40, 5, 50, 23, 79];
      break;
  }
  return (dataValues);
};

const setLineDataValues = (ind) => {
  let dataValues = [];
  switch (ind) {
    case 1:
      dataValues = [50, 100, 50, 100, 50];
      break;
    case 2:
      dataValues = [100, 50, 100, 50, 100];
      break;
  }
  return (dataValues);
};

const setBubbleDataValues = (ind) => {
  let dataValues = [];
  switch (ind) {
    case 1:
      dataValues = [{
        size: 2.3,
        y: 180
        }, {
        size: 1.4,
        y: 150
        }, {
        size: 2.0,
        y: 106
        }, {
        size: 5.0,
        y: 100
        }, {
        size: 4.1,
        y: 65
      }];
      break;
    case 2:
    dataValues = [{
      size: 2.3,
      y: 180
      }, {
      size: 1.4,
      y: 150
      }, {
      size: 2.0,
      y: 106
      }, {
      size: 5.0,
      y: 100
      }, {
      size: 4.1,
      y: 65
    }];
    break;
  }
  return (dataValues);
};

const setCandleDataValues = (ind) => {
  let dataValues = [];
  switch (ind) {
    case 1:
    dataValues = [{
      shadowH: 20,
      shadowL: 5,
      open: 15,
      close: 10
      }, {
      shadowH: 30,
      shadowL: 10,
      open: 25,
      close: 15
      }, {
      shadowH: 10,
      shadowL: 5,
      open: 15,
      close: 10
      }, {
      shadowH: 50,
      shadowL: 5,
      open: 15,
      close: 25
    }];
    break;

    case 2:
    dataValues = [{
      shadowH: 20,
      shadowL: 5,
      open: 15,
      close: 10
      }, {
      shadowH: 30,
      shadowL: 10,
      open: 25,
      close: 15
      }, {
      shadowH: 10,
      shadowL: 5,
      open: 15,
      close: 10
      }, {
      shadowH: 50,
      shadowL: 5,
      open: 15,
      close: 25
    }];
    break;
  }
  return (dataValues);
};

const setScatterDataValues = (ind) => {
  let dataValues = [];
  switch (ind) {
    case 1:
      dataValues = [15, 40, 77, 81, 43];
      break;
    case 2:
      dataValues = [15, 40, 77, 81, 43];
      break;
    case 3:
      dataValues = [10, 55, 35, 90, 82];
      break;
  }
  return (dataValues);
};

export function setBarxAxis() {
  let xAxis = {};
  xAxis = {
        valueFormatter: ['1990', '1991', '1992', '1993', '1994'],
        granularityEnabled: true,
        granularity: 1
      };
  return (xAxis);
}
export function getBarChartLegend() {
const legend = {
  enabled: true,
  textSize: 14,
  form: 'SQUARE',
  formSize: 14,
  xEntrySpace: 10,
  yEntrySpace: 5,
  formToTextSpace: 5,
  wordWrapEnabled: true,
  maxSizePercent: 0.5
};
  return (legend);
}

export function nextTimeInterval(x) {
  return (x + 1);
}
