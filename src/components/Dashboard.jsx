const Dashboard = ({ userInfo }) => {

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

