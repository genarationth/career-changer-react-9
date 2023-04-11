import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [rate, setRate] = useState(0);
  const [exchange, setExchange] = useState(1);

  const syncRate = () => {
    setRate(30);
  };

  const handleExchangeChange = (event) => {
    const newExchange = event.target.value;
    setExchange(newExchange);
  };

  useEffect(syncRate, [])

  return (
    <div>
      <h1>Current Rate: {rate}</h1>
      <input type="number" value={exchange} onChange={handleExchangeChange} />
      <h2>Calculated Exchange: {exchange * rate}</h2>
    </div>
  );
};

export default AutoSync;
