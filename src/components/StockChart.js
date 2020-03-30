import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const getNumbersSequence = num => [ ...new Array(num)].map((_, i) => i + 1);

const StockChart = ({ title = 'default title', type = 'line', color = 'royalblue' }) => {
  const options = {
    title: {
      text: title
    },
    series: [{
      type,
      color,
      data: getNumbersSequence(30)
    }]
  }
  
  return (
    <HighchartsReact
    highcharts={Highcharts}
    constructorType={'stockChart'}
    options={options}
    />)   
}

export default StockChart