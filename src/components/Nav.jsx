import { Link } from 'react-router-dom';
import logo from '../assets/CryptopediaLogo.png';
import { Navbar, Button } from 'react-bootstrap'


const Navigation = ({ token, setToken }) => {

    function logout() {
        sessionStorage.removeItem('token')
        setToken(null)
    }

    const isAuth = token
        ? <>
            <Button className='mr-5' variant='primary'>
                <Link className='text-white' to='/dashboard'>Dashboard</Link>
            </Button>
            <Button variant='danger'>
                <Link onClick={logout} className='text-white' to={'/'}>Sign Out</Link>
            </Button>
        </>
        : <>
            <Button className='mr-3' variant='secondary'>
                <Link className="text-white" to={'/login'}>Log In</Link>
            </Button>
            <Button variant='primary'>
                <Link className="text-white" to={'/createacc'}>Create Account</Link>
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