import React, { useState, useEffect, PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios';
import './styles/dashboard.css'
import { render } from '@testing-library/react';


const Dashboard = () => {

    const [coinsData, setCoinsData] = useState([]);
    const [btcHist, setBtcHist] = useState([]);
    const [userData, setUserData] = useState([]);
    console.log(btcHist);

    useEffect(() => {
        axios.get(`http://rest-sandbox.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;LTC;XRP;BCH&apikey=${process.env.API_KEY}`)
            .then(res => {
                setCoinsData(res.data);
            })
            .catch(err => console.log(err))

    }, []);

    useEffect(() => {
        axios.get(`http://rest-sandbox.coinapi.io/v1/trades/GEMINI_SPOT_BTC_USD/history?time_start=2020-12-16&limit=10&include_id=false&apikey=${process.env.API_KEY}`)
            .then(res => {
                setBtcHist(res.data);
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
            <div className='bg-secondary container-fluid pl-5 pr-0'>
                <div className='d-flex flex-row justify-content-around'>
                    {coinsData && coinsData.map((coin) => {
                        return <p className='col text-white m-0 p-0'>{coin.name}: ${Number.parseFloat(coin.price_usd).toFixed(2)}</p>
                    })}
                </div>
            </div>
            <div className='container-fluid background-image2'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-center'>Current Holdings</h3>
                        <div className='bg-white'>
                            <h6 className='text-dark'>Wallet:</h6>
                            <p>USD:</p>
                            <p>BTC:</p>
                            <p>XRP:</p>
                            <p>ETH:</p>
                            <p>LTC:</p>
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className='text-center'>Price Charts</h3>
                        <LineChart data={btcHist} width={300} height={300} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </div>
                    <div className='col'>
                        <h3 className='text-center'>Trade History</h3>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;