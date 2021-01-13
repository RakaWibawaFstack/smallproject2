import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'          

import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { ListProducts } from './pages/index';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import './navbar.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Shop} path="/shop" />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={ListProducts} path="/index" />
      </Switch>
    </Router>
  );
}

export default App;