import axios from 'axios'
import { useEffect, useState, useMemo } from 'react';
import coinList from '../assets/top100cryptos'
import Table from './Table'


const Dashboard = ({ userInfo }) => {

    const [allRawCryptos, setallRawCryptos] = useState({})
    const query = "&ids=" + coinList.join(',')

    useEffect(() => {
        axios.get(process.env.REACT_APP_GECKO_MARKET_INFO + query)
            .then(res => setallRawCryptos(res.data))
            .catch(err => console.log(err))
    }, [])

    function formatCryptoObj(cryptoApiObject) {
        let rawObject = Object.keys(cryptoApiObject).map(k => {
            let coinBalance = userInfo?.coins[k.toLowerCase()]
                ? userInfo?.coins[k.toLowerCase()]
                : 0;
            return {
                name: k.toUpperCase(),
                price: Math.floor(allRawCryptos[k].usd * 1000) / 1000,
                change: Math.floor(allRawCryptos[k].usd_24h_change * 100) / 100,
                marketCap: Math.floor(allRawCryptos[k].usd_market_cap),
                coinBalance: coinBalance
            }
        })
        rawObject.sort((a, b) => {
            if (a.marketCap > b.marketCap)
                return -1
            else {
                return 1
            }
        })
        return rawObject
    }

    const columns = useMemo(() => [
        {
            Header: 'Cryptocurency Information',
            columns: [
                {
                    Header: 'Identifier',
                    accessor: 'name'
                },
                {
                    Header: 'Price',
                    accessor: 'price'
                },
                {
                    Header: '24h %',
                    accessor: 'change'
                },
                {
                    Header: 'Market Cap',
                    accessor: 'marketCap'
                }
            ]
        }

    ], [])

    const data = useMemo(() => formatCryptoObj(allRawCryptos), [allRawCryptos])

    return (
        <>
            <div className='container-fluid background-image2 mb-3 d-flex flex-column pt-3'>
                <h1>Welcome Back {userInfo?.firstName}!</h1>
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-center'>Wallet Funds</h3>
                        <div className="container">
                            <h5>USD {Number((userInfo?.balance).toFixed(2)).toLocaleString('en')}</h5>
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className='text-center'>Market</h3>
                        <Table
                            data={data}
                            columns={columns}
                        />
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

