import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './components/Coin';




function App() {

  const [coins, setCoins] = useState([{
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 21200,
    "market_cap": 404254630946,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 445026472978,
    "total_volume": 23243678738,
    "high_24h": 21336,
    "low_24h": 20700,
    "price_change_24h": 305.05,
    "price_change_percentage_24h": 1.45989,
    "market_cap_change_24h": 6972956362,
    "market_cap_change_percentage_24h": 1.75517,
    "circulating_supply": 19076050.0,
    "total_supply": 21000000.0,
    "max_supply": 21000000.0,
    "ath": 69045,
    "ath_change_percentage": -69.36078,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 31097.59275,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2022-06-24T19:51:39.115Z"
}]);
  const [search, setSearch] = useState('');


  // useEffect(() => {
  //   axios.get('/getInfo').then(
  //     res => {
  //       setCoins(res.data);
  //     }).catch(error => console.log(error));
  // }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'> Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>

      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} marketcap={coin.market_cap} price={coin.current_price} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume} />

        )
      })}

    </div>
  );
}



export default App;
