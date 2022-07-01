import React from 'react'
import './Coin.css';


const coin = ({name, image, symbol, price, volume, priceChange, marketcap}
) => {
    return (
        <div className='coin'>
            <img src={image} alt="cryptoimage" />
            <h1>{name}</h1>
            <p className='coin-symbol'> {symbol}</p>
            <p className='coin-price'>${price}</p>
            <p className='coin-volume'> Vol: ${volume.toLocaleString()}</p>
            {priceChange <0 ? (
                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ): (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)
            }
            <p className='coin-marketcap'>
                Mkt Cap: ${marketcap.toLocaleString()}
            </p>
        </div>
    )
}

export default coin