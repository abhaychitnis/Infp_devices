export function getBarData() {
  const data = [
      [{
        'v': 49,
        'name': 'apple'
      },
      {
        'v': 42,
        "name": 'apple'
      }],
      [{
        'v': 69,
        'name': 'banana'
      }, {
        'v': 62,
        'name': 'banana'
      }],
      [{
        'v': 29,
        'name': 'grape'
      }, {
        'v': 15,
        'name': 'grape'
      }]
    ]
  return (data);
}

export function getBarOptions() {
  const options = {
    width: 400,
    height: 170,
    margin: {
      top: 0,
      left: 20,
      bottom: 0,
      right: 0
    },
    color: '#2980B9',
    gutter: 20,
    animate: {
      type: 'oneByOne',
      duration: 200,
      fillTransition: 3
    },
    axisX: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'bottom',
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E',
        rotate: 45
      }
    },
    axisY: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'left',
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    }
  };
  return (options);
}
