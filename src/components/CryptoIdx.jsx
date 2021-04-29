import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navbar } from 'react-bootstrap'

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
        <Navbar sticky='top' className='d-block container-fluid p-0 bg-secondary mb-4 '>
            <div className='d-flex'>
                {coinsData?.map((coin, idx) => (
                    <p key={idx}
                        className='col small text-center text-white m-0'
                    >{coin.name}: ${Number.parseFloat(coin.price_usd.toFixed(2)).toLocaleString('en')}</p>
                ))}
            </div>
        </Navbar>
    )
}