import { processColor } from 'react-native';

export function getBarChartData(timeValue, pastData) {
  const data = {
        dataSets: [{
          values: setBarDataValues(1),
          label: 'Bar Dataset 1',
          config: {
            color: processColor('teal'),
            barSpacePercent: 40,
            barShadowColor: processColor('lightgrey'),
            highlightAlpha: 90,
            highlightColor: processColor('red'),
          }
        },
        {
          values: setBarDataValues(2),
          label: 'Bar Dataset 2',
          config: {
            color: processColor('blue'),
            barSpacePercent: 40,
            barShadowColor: processColor('lightgrey'),
            highlightAlpha: 90,
            highlightColor: processColor('red'),
          }
        }
      ],
      config: { barWidth: 0.42,
        group: { fromX: 0, groupSpace: 0.1, barSpace: 0 } }
    };
  return (data);
}

const setBarDataValues = (ind) => {
  let dataValues = [];

  switch (ind) {
    case 1:
      dataValues = [{ y: 100 }, { y: 105 }, { y: 110 }, { y: 110 },
                  { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 },
                  { y: 110 }];
      break;
    case 2:
      dataValues = [{ y: 85 }, { y: 100 }, { y: 102 }, { y: 95 },
                  { y: 105 }, { y: 90 }, { y: 101 }, { y: 105 }, { y: 110 },
                  { y: 90 }];
      break;
  }
/*
  dataValues = [{
        dataSets: [{
          values: [5, 40, 77, 81, 43],
          label: 'Company A',
          config: {
            drawValues: false,
            colors: [processColor('red')],
          }
        }, {
          values: [40, 5, 50, 23, 79],
          label: 'Company B',
          config: {
            drawValues: false,
            colors: [processColor('blue')],
          }
        }, {
          values: [10, 55, 35, 90, 82],
          label: 'Company C',
          config: {
            drawValues: false,
            colors: [processColor('green')],
          }
        }],
        config: {
          barWidth: 0.2,
          group: {
            fromX: 0,
            groupSpace: 0.1,
            barSpace: 0.1,
          },
        }
      }]
*/
  return (dataValues);
};

export function setBarxAxis (xStart, pastData) {
  let xAxis = {};
  xAxis = {
        valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        granularityEnabled: true,
        granularity: 1,
        centerAxisLabels: true,
        setFitBars: true,
        position: 'BOTTOM'
      };
  return (xAxis);
}
const setBarPredictedValues = (xStart) => {
  const remain = xStart % 100;
  let dataValues = [];
  let yNew = [];
  let i;

  for (i = remain; i < 100; i++) {
    yNew.push((Math.sin(Math.PI * ((i - 50) / 50)) * 10));
  }
  for (i = 0; i < remain; i++) {
    yNew.push((Math.sin(Math.PI * ((i - 50) / 50)) * 10));
  }
  yNew.shift();
  //if (xStart > 0) {
  yNew.push((Math.sin(Math.PI * (((remain - 1) - 50) / 50)) * 10));
  //}
  for (i = xStart; i < (xStart + 100); i++) {
    dataValues.push({ x: xStart + i, y: yNew[i - xStart] });
  }

  return (dataValues);
};

const getNextDataValue = (remain) => {
  const returnValue =
    (Math.sin(Math.PI * (((remain - 1)) / 50)) * 10) + ((Math.random() * 5) - 4);
//  console.log('Return Value is : ');
//  console.log(returnValue);
  return (returnValue);
};

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
export function getBarChartMarker() {
const marker = {
  enabled: false,
  markerColor: processColor('#F0C0FF8C'),
  textColor: processColor('white'),
  markerFontSize: 14,
};
return (marker);
}

export function nextTimeInterval(x) {
  return (x + 1);
}
