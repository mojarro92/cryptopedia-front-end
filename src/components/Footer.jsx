import React from 'react';
import { Navbar } from 'react-bootstrap'
const Footer = () => {
    return (
        <>
            <Navbar className="bg-info d-block font-small">
                <div className="container text-center text-md-left">
                    <div className="row mt-3">
                        <div className="col-md-4 mx-auto">
                            <h5 className="font-weight-bold text-uppercase">Cryptopedia Trading Simulator</h5>
                            <p className="small">Practice trading cryptocurrencies without the risk of losing your hard earned cash. Hone your trading skills
                            before stepping into the big leagues. Learn more about this exciting new investment space while trading different coins.
                            </p>
                        </div>
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase">company</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a className='text-dark' href="#!">Home</a>
                                </li>
                                <li>
                                    <a className='text-dark' href="#!">Blog</a>
                                </li>
                                <li>
                                    <a className='text-dark' href="#!">Join us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase">products</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a className='text-dark' href="#!">App</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase">resources</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a className='text-dark' href="#!">Help Center</a>
                                </li>
                                <li>
                                    <a className='text-dark' href="#!">API Info</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a className='text-secondary' href="/"> Cryptopedia</a>
                </div>
            </Navbar>
        </>
    );
};

export default Footer;