import { Link } from 'react-router-dom';
import logo from '../assets/CryptopediaLogo.png';
import { Navbar, Button } from 'react-bootstrap'


const Nav = () => {
    return (
        <Navbar bg="white">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="90"
                    height="60"
                />Cryptopedia
            </Navbar.Brand>
            <Button variant='secondary'><Link className="text-white" to={'/login'}>Log In</Link></Button>
            <Button variant='primary'><Link className="text-white" to={'/createacc'}>Create Account</Link></Button>
        </Navbar>

    )
};

export default Nav;