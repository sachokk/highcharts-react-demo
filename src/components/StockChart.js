import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useFetch } from '../hooks'

const StockChart = ({
  title = 'default title',
  type = 'line',
  color = 'royalblue',
  endpoint
}) => {
  const {data, error, loading } = useFetch(endpoint);
  
  if (loading || error) {
    return <h1>loading...</h1>
  }

  const options = {
    title: {
      text: title
    },
    series: [{
      type,
      name: 'stock price',
      color,
      data
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