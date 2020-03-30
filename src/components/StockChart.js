import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const getNumbersSequence = num => [ ...new Array(num)].map((_, i) => i + 1);

const options = {
  title: {
    text: 'My stock chart'
  },
  series: [{
    data: getNumbersSequence(150)
  }]
}

const StockChart = () => <HighchartsReact
  highcharts={Highcharts}
  constructorType={'stockChart'}
  options={options}
/>

export default StockChart