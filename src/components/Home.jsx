import CoinStack from '../assets/coin-stack.png';
import ChartIcon from '../assets/chart-icon.png';

const Home = () => {
    return (
        <div className='container background-image mb-3 d-flex flex-column justify-content-around align-items-center'>
            <div className='row d-flex flex-column align-items-center justify-content-center'>
                <h1>WELCOME TO CRYPTOPEDIA</h1>
                <h2>Trade crypto, without the risk</h2>
                <p>Practice trading BTC and other popular cryptocurrencies all in one place. </p>
                <h6>Think you got what it takes to be the next bitcoin billionaire?</h6>

            </div>

            <div className='row m-0'>
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
    );
};

export default Home;