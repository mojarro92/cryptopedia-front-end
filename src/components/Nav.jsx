import logo from '../assets/CryptopediaLogo.png';
import { Navbar, Button } from 'react-bootstrap'


const Navigation = ({ token, setToken }) => {

    function logout() {
        sessionStorage.removeItem('token')
        setToken(null)
        return window.location.href = '/'
    }

    const isAuth = token
        ? <>
            <Button href='/dashboard' className='mr-5' variant='primary'>
                Dashboard
            </Button>
            <Button onClick={logout} variant='danger'>
                Sign Out
            </Button>
        </>
        : <>
            <Button href='/login' className='mr-3' variant='secondary'>
                Log In
            </Button>
            <Button href='/createacc' variant='primary'>
                Create Account
            </Button>
        </>

    return (
        <Navbar className='justify-content-between' bg="white">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="90"
                    height="60"
                />Cryptopedia
            </Navbar.Brand>
            <div>
                {isAuth}
            </div>
        </Navbar>

    )
};

export default Navigation;