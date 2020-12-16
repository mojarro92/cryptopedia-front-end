import './styles/home.css'
import '../index'
import React from 'react';
import { Link } from 'react-router-dom';
import CoinStack from '../assets/coin-stack.png';
import ChartIcon from '../assets/chart-icon.png';

const Home = () => {
    return (
        <div>
            <div className='background-image mb-4 d-flex flex-column align-items-center justify-content-center'>
                <div className='d-flex flex-column align-items-center justify-content-center pt-5 mt-5'>
                    <h1>WELCOME TO CRYPTOPEDIA</h1>
                    <h2>Trade crypto, without the risk</h2>
                    <p>Practice trading BTC and other popular cryptocurrencies all in one place. </p>
                    <h6>Think you got what it takes to be the next bitcoin billionaire?</h6>

                    <div className='getStarted pt-3'>
                        <button className='btn btn-primary'><Link className='text-white' to={'/createacc'}>SIGN UP NOW</Link></button>
                    </div>
                </div>
                <div className='d-flex m-5 p-5 justify-content-center'>
                    <img src={CoinStack} className='img-fluid img-thumbnail' alt='Coin Stack' />
                    <div className='col-5'>
                        <h5>Compete, Risk Free with $100,000 in Virtual Cash</h5>
                        <p>Start with $100,000 in virtual cash and put your trading skills to the test. Compete with thousands of other traders and trade your way to the top!</p>
                    </div>
                    <img src={ChartIcon} className='img-fluid img-thumbnail' alt='Chart Icon' />
                    <div className="col-5">
                        <h4>A Stepping Stone to the Real Markets</h4>
                        <p>The ideal platform to get your crypto feet wet! Submit trades in a virtual environment before you start risking your own capital.</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;