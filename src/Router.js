import React from 'react';
import { Switch, Route } from "react-router-dom";
import StockChart from './components/StockChart';
import LineChart from './components/LineChart';
import { useQueryParams } from './hooks';

const Chart = () => {
  const { title, type, color, endpoint } = useQueryParams();

  const chartProps = {
    title,
    type,
    color,
    endpoint
  }

  return (
        <Switch>
          <Route path="/stock">
            <StockChart {...chartProps} />
          </Route>
          <Route path="/chart">
            <LineChart {...chartProps} />
          </Route>
          <Route path="/">
            <LineChart {...chartProps} />
          </Route>
        </Switch>
  );
}

export default Chart;
