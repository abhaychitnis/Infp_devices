import { processColor } from 'react-native';

export function getLineChartData(timeValue, pastData) {
  const data = {
        dataSets: [{
          values: setLineDataValues(timeValue, pastData),
          label: 'Actual',
          config: {
            lineWidth: 1,
            drawValues: false,
            circleRadius: 1,
            highlightEnabled: false,
            drawHighlightIndicators: false,
            color: processColor('red'),
            drawFilled: false,
            valueTextSize: 10,
            fillColor: processColor('red'),
            fillAlpha: 45,
            valueFormatter: '$###.0',
            circleColor: processColor('red')
          }
        }, {
          values: setLinepredictedValues(timeValue),
          label: 'Prediction',
          config: {
            lineWidth: 1,
            drawValues: false,
            circleRadius: 1,
            highlightEnabled: false,
            drawHighlightIndicators: false,
            color: processColor('green'),
            drawFilled: false,
            valueTextSize: 10,
            fillColor: processColor('red'),
            fillAlpha: 45,
            valueFormatter: '$###.0',
            circleColor: processColor('green')
          }
        }
      ]
    };
    //console.log(data.dataSets[0].values);
  return (data);
}

const setLineDataValues = (xStart, pastData) => {
  const remain = xStart % 100;

  let remainHalf = 0;

  if (remain > 50) {
      remainHalf = (xStart % 50) + 50;
  } else {
      remainHalf = xStart % 50;
  }

  let dataValues = [];
  let yNew = [];
  let i;

  if (xStart === 0) {
    for (i = 0; i < 50; i++) {
      yNew.push((Math.sin(Math.PI * ((i - 50) / 50)) * 10) + ((Math.random() * 2) - 1));
    }
  } else {
      for (i = 0; i < 50; i++) {
        yNew[i] = pastData.dataSets[0].values[i].y;
      }
      yNew.shift();
      yNew.push(getNextDataValue(remain));
  }

  for (i = xStart; i < (xStart + 50); i++) {
    dataValues.push({ x: xStart + i, y: yNew[i - xStart] });
  }

  return (dataValues);
};

const setLinepredictedValues = (xStart) => {
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

const getLineDataConfig = (ind) => {
  return (returnValue);
};
export function getLineChartLegend() {
const legend = {
    enabled: false,
    textColor: processColor('red'),
    textSize: 12,
    position: 'BELOW_CHART_RIGHT',
    form: 'SQUARE',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    formToTextSpace: 5,
    wordWrapEnabled: true,
    maxSizePercent: 0.5,
    custom: {
      colors: [processColor('red')],
      labels: ['USER']
    }
  };
  return (legend);
}
export function getLineChartMarker() {
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
