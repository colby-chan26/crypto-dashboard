import React from 'react'
import './Coin.css';
import '../App.css';

const exchange = ({name, image, country, year_established, trust_score, url}
) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt="cryptoimage" />
                    <h1>{name}</h1>
                </div>
                <div className='coin-data'>
                    <p  className='coin-price'> {country}</p>
                    <p  className='coin-price'>{year_established}</p>
                    <p  className='coin-price'>{trust_score}/10</p>
                    <a target="_blank" rel="noopener noreferrer" href={url} className="button4">link</a>
                </div>
            </div>
        </div>
    )
}

export default exchange