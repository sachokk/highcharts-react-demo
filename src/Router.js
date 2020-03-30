import React from 'react';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import StockChart from './components/StockChart'
import LineChart from './components/LineChart';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Chart = () => {
  const query = useQuery();

  const chartProps = {
    title: query.get('title'),
    type: query.get('type'),
    color: query.get('color'),
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
