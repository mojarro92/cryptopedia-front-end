import './App.scss';
import { Switch } from "react-router-dom"
import Home from './components/Home'
import Nav from './components/Nav'
import CryptoIdx from './components/CryptoIdx'
import Dashboard from './components/Dashboard'
import Createacc from './components/Createacc';
import Login from './components/Login'
import Footer from './components/Footer'
import useToken from './components/Hook/useToken'
import RouterController from './components/routes/RouteController'

function App() {

  const { token, setToken } = useToken()

  return (
    <div className='App'>
      <Nav token={token} setToken={setToken} />
      <CryptoIdx />
      <Switch>
        <RouterController
          routeType={'public'}
          component={Home}
          path={'/'}
          exact
        />
        <RouterController
          routeType={'auth'}
          token={token}
          comp={Createacc}
          path={'/createacc'}
          exact
        />
        <RouterController
          routeType={'auth'}
          token={token}
          comp={Login}
          setToken={setToken}
          path={'/login'}
          exact
        />
        <RouterController
          routeType={'protected'}
          token={token}
          comp={Dashboard}
          path={'/dashboard'}
          exact
        />
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
