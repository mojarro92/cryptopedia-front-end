import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CryptoIdx() {
    const [coinsData, setCoinsData] = useState([]);

    useEffect(() => {
        axios.get(`https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;LTC;BCH&apikey=${process.env.REACT_APP_COIN_API_KEY}`)
            .then(res => {
                setCoinsData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container-fluid bg-secondary mb-4'>
            <div className='d-flex flex-row justify-content-evenly'>
                {coinsData && coinsData.map((coin, idx) => {
                    return <p key={idx} className='col text-white m-0 p-0'>{coin.name}: ${Number.parseFloat(coin.price_usd).toFixed(2)}</p>
                })}
            </div>
        </div>
    )
}
