import React from 'react'
import './Exchange.css';
import '../App.css';

const exchange = ({name, image, country, year_established, trust_score, url}
) => {
    return (
        <div className='exchange'>
            <img src={image} alt="cryptoimage" />
            <h1>{name}</h1>
            <p  className='exchange-marketcap'> {country}</p>
            <p  className='exchange-volume'>{year_established}</p>
            <p  className='exchange-volume'>{trust_score}/10</p>
            <a target="_blank" rel="noopener noreferrer" href={url} className="button4">link</a>
        </div>
    )
}

export default exchange