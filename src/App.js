import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'          

import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { ListProducts } from './pages/index';
import { ListProducts2 } from './pages/index1';
import { ListProducts3 } from './pages/index2';
import { ListProducts4 } from './pages/index3';

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
        <Route component={ListProducts2} path="/index1" />
        <Route component={ListProducts3} path="/index2" />
        <Route component={ListProducts4} path="/index3" />
      </Switch>
    </Router>
  );
}

export default App;