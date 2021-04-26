import './App.scss';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Createacc from './components/Createacc';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route path='/createacc' render={(props) => <Createacc {...props} />} />
        <Route path='/login' render={(props) => <Login {...props} />} />
        <Route path='/dashboard' render={(props) => <Dashboard {...props} />} />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
