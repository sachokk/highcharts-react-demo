import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useFetch } from '../hooks';

const LineChart = ({ title = 'default title', endpoint }) => {
  const {data, error, loading } = useFetch(endpoint);
  
  if (loading || error) {
    return <h1>loading...</h1>
  }

  const options = {
    ...data,
    title: {
      text: title
    }
   };

  return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    )
}

export default LineChart;