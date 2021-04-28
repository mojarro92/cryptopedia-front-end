import '../index'
import React from 'react';
import { Link } from 'react-router-dom';
import CoinStack from '../assets/coin-stack.png';
import ChartIcon from '../assets/chart-icon.png';

const Home = () => {
    return (
        <div className="row justify-content-center">
            <div className='background-image mb-3 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-column align-items-center justify-content-center pt-5 mt-5'>
                    <h1>WELCOME TO CRYPTOPEDIA</h1>
                    <h2>Trade crypto, without the risk</h2>
                    <p>Practice trading BTC and other popular cryptocurrencies all in one place. </p>
                    <h6>Think you got what it takes to be the next bitcoin billionaire?</h6>

                    <div className='getStarted pt-3'>
                        <button className='btn btn-primary'><Link className='text-white' to={'/createacc'}>SIGN UP NOW</Link></button>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className="row mt-5">
                        <div className='col-12 col-md-6 col-lg-2 d-flex align-items-center'>
                            <img src={CoinStack} className='coinStack' alt='Coin Stack' />
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <h5>Compete, Risk Free with $100,000 in Virtual Cash</h5>
                            <p>Start with $100,000 in virtual cash and put your trading skills to the test. Compete with thousands of other traders and trade your way to the top!</p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 d-flex align-items-center'>
                            <img src={ChartIcon} className='chartIcon' alt='Chart Icon' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <h4>A Stepping Stone to the Real Markets</h4>
                            <p>The ideal platform to get your crypto feet wet! Submit trades in a virtual environment before you start risking your own capital.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;