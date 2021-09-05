import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from '../containers/NavBar';
import Home from '../containers/Home';
import Stock from '../containers/Stock';
import Companies from '../containers/Companies';
import Forex from '../containers/Forex';
import Crypto from '../containers/Crypto';
import StockDetail from '../containers/stockDetails';
import Footer from '../containers/Footer';
import '../styles/App.css';

function Routes() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route
            component={Home}
            exact
            path="/"
          />
          <Route
            component={Stock}
            exact
            path="/stock"
          />
          
          <Route
            component={Companies}
            exact
            path="/company"
          />

          <Route
            component={Forex}
            exact
            path="/forex"
          />

          <Route
            component={StockDetail}
            exact
            path="/stockDetail/:ticker"
          />

          <Route 
            component={Crypto}
            exact
            path="/crypto"
          />
        </Switch>
        <Footer />
      </Router>
    
  );
}

export default Routes;
