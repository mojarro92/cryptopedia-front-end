import './styles/navbar.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/CryptopediaLogo.png';

const Navbar = () => {
    const API_KEY = 'B53D3D81-5BCC-4278-AD71-97E0C7D32B9D';
    const [btcPrice, setBtcPrice] = useState();

    useEffect(() => {
        axios.get(`http://rest-sandbox.coinapi.io/v1/exchangerate/BTC/USD?apikey=${API_KEY}`)
            .then(res => {
                setBtcPrice(Math.floor(res.data.rate));
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
                    <a className="nav-link text-dark" href="#!">BTC ${btcPrice}</a>
                </li>
                <li className="nav-item">
                    <button className='btn btn-secondary'><Link className="text-white" to={'/createacc'}>Log In</Link></button>
                </li>
                <li className="nav-item">
                    <button className='btn btn-primary'><Link className="text-white" to={'/createacc'}>Create Account</Link></button>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;