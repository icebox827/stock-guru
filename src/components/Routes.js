import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from '../containers/NavBar';
import Stock from '../containers/Stock';
import Companies from '../containers/Companies';
import Forex from '../containers/Forex';
import StockDetail from '../containers/stockDetails';
import News from '../containers/News';
import '../styles/App.css';

function Routes() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route
            component={Stock}
            exact
            path="/"
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
            component={News}
            exact
            path="/news"
          />
        </Switch>
      </Router>
    
  );
}

export default Routes;
