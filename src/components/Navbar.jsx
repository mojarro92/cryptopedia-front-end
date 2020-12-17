import './styles/navbar.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/CryptopediaLogo.png';

const Navbar = () => {
    const [coinsData, setCoinsData] = useState([]);

    useEffect(() => {
        axios.get(`https://rest-sandbox.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;LTC;XRP;BCH&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setCoinsData(res.data);
            })
            .catch(err => console.log(err))

    }, []);

    return (
        <div className='container-fluid pb-2'>
            <ul className="nav text-secondary">
                <li className="nav-item">
                    <a className="nav-link active" href="/">
                        <img src={logo} className="logo" alt='weblogo' />
                    </a>
                </li>
                <li className="nav-item">
                    <button className='btn btn-secondary'><Link className="text-white" to={'/login'}>Log In</Link></button>
                </li>
                <li className="nav-item">
                    <button className='btn btn-primary'><Link className="text-white" to={'/createacc'}>Create Account</Link></button>
                </li>
            </ul>
            <div className='bg-secondary container-fluid pl-5 pr-0'>
                <div className='d-flex flex-row justify-content-around'>
                    {coinsData && coinsData.map((coin) => {
                        return <p className='col text-white m-0 p-0'>{coin.name}: ${Number.parseFloat(coin.price_usd).toFixed(2)}</p>
                    })}
                </div>
            </div>
        </div>
    )
};

export default Navbar;