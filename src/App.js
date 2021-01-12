import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'          

import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { ListProducts } from './pages/index';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Shop} path="/shop" />
        <Route component={ListProducts} path="/index" />
      </Switch>
    </Router>
  );
}

export default App;