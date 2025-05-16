import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/markets')
      .then(res => setMarketData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Market Dashboard</h1>
      <pre>{JSON.stringify(marketData, null, 2)}</pre>
    </div>
  );
}
