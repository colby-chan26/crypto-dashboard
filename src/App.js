import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './components/Coin';
import Exchange from './components/Exchange';





function App() {

  const [coins, setCoins] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [search, setSearch] = useState('');
  const [searchMode, setSearchMode] = useState('currency');


  useEffect(() => {
    //axios.get('/getInfoCurrency').then(
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(
      res => {
        setCoins(res.data);
      }).catch(error => console.log(error));

    //axios.get('/getInfoExchange').then(
    axios.get('https://api.coingecko.com/api/v3/exchanges?per_page=250').then(
      res => {
        setExchanges(res.data);
        console.log(res.data)
      }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  const changeSearch = mode => {
    setSearchMode(mode)
    setSearch('')
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()));

  const filteredExchanges = exchanges.filter(exchange =>
     exchange.name.toLowerCase().includes(search.toLowerCase()));
  
  return (

    <div className='coin-app'>
      <div className='button-container'>
        <button class="button3" onClick={() => changeSearch('currency')}>Currencies</button>
        <button class="button3" onClick={() => changeSearch('exchange')}>Exchanges</button>
      </div>


      {searchMode === 'currency' ? <>
      <div className='coin-search'>
        <h1 className='coin-text'> console.log('Search a currency')</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>

      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} marketcap={coin.market_cap} price={coin.current_price} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume} />

        )
      })}
      </> : <>
      <div className='coin-search'>
        <h1 className='coin-text'> console.log('Search an Exchange')</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>

      </div>
      {filteredExchanges.map(exchange => {
        return (
          <Exchange key={exchange.name} name={exchange.name} image={exchange.image} country={exchange.country} year_established={exchange.year_established} trust_score={exchange.trust_score} url={exchange.url} />
        )
      })}
      </>}

    </div>
  );
}



export default App;
