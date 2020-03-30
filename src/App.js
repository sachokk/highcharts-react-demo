import React from 'react';
import './App.css';
import StockChart from './components/StockChart'
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <LineChart />
      <StockChart />
    </div>
  );
}

export default App;
