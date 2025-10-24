import React, { useEffect, useState } from 'react';
import { fetchIndices, fetchTopGainers, fetchTopLosers, fetchMarketCap } from '../services/api';
import Indices from '../components/Dashboard/Indices';
import TopGainers from '../components/Dashboard/TopGainers';
import TopLosers from '../components/Dashboard/TopLosers';
// import MarketCap from '../components/Dashboard/MarketCap';

const DashboardPage = () => {
  const [indices, setIndices] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [marketCap, setMarketCap] = useState([]);

  useEffect(() => {
    fetchIndices().then(setIndices);
    fetchTopGainers().then(setGainers);
    fetchTopLosers().then(setLosers);
    fetchMarketCap().then(setMarketCap);
  }, []);

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <Indices data={indices} />
      <TopGainers data={gainers} />
      <TopLosers data={losers} />
      {/* <MarketCap data={marketCap} /> */}
    </div>
  );
};

export default DashboardPage;
