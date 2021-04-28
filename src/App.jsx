import './App.scss';
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Createacc from './components/Createacc';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CryptoIdx from './components/CryptoIdx'
import ProtectedRoute from './components/ProtectedRoute'
import { Route, Switch } from "react-router-dom"
import useToken from './components/Hook/useToken'

function App() {

  const { token, setToken } = useToken()

  return (
    <div className='App'>
      <Nav />
      <CryptoIdx />
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route path='/createacc' render={(props) => <Createacc {...props} />} />
        <Route path='/login' render={(props) => <Login {...props} setToken={setToken} />} />
        <ProtectedRoute Component={Dashboard} token={token} />
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
