import React, { useState, useEffect } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import axios from 'axios';
import './styles/dashboard.css'
// import { render } from '@testing-library/react';



const Dashboard = () => {

    const [btcHist, setBtcHist] = useState([]);
    const [coinPrices, setCoinPrices] = useState([]);
    console.log(coinPrices);
    // const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily`)
            .then(res => {
                setBtcHist(res.data.prices);
            })
            .catch(err => console.log(err))

    }, []);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple%2Ctether%2Clitecoin%2Cbitcoin-cash%2Cchainlink%2Ccardano%2Cpolkadot%2Cbinance-coin%2Cstellar&vs_currencies=usd&include_24hr_change=true`)
            .then(res => {
                setCoinPrices(res.data);
            })
            .catch(err => console.log(err))

    }, []);

    // useEffect(() => {
    //     axios.get(`http://localhost:3000/user`)
    //         .then(res => {
    //             setUser(res.data);
    //         })
    //         .catch(err => console.log(err))

    // }, []);
    return (
        <>
            <div className='container-fluid background-image2 mb-3 d-flex flex-column pt-3'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-center'>Market</h3>
                        <div className='bg-white'>
                            <h6 className='text-dark'>Market Information:</h6>
                            {Object.keys(coinPrices).map(key => {
                                return <p>{`${key}: $${Number.parseFloat(coinPrices[key].usd).toFixed(2)} ---- ${Number.parseFloat(coinPrices[key].usd_24h_change).toFixed(2)}%`}</p>
                            })}

                        </div>
                    </div>
                    <div className='col'>
                        <h3 className='text-center'>Crypto Index 30 Days</h3>
                        <LineChart data={btcHist.map((price, index) => ({ name: index, "uv": price[1] }))} width={300} height={300} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </div>
                    <div className='col'>
                        <h3>Trading History</h3>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;

