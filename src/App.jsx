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
      <Nav />
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
          component={Createacc}
          path={'/createacc'}
          exact
        />
        <RouterController
          routeType={'auth'}
          token={token}
          component={Login}
          setToken={setToken}
          path={'/login'}
          exact
        />
        <RouterController
          routeType={'protected'}
          token={token}
          component={Dashboard}
          path={'/dashboard'}
          exact
        />
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
