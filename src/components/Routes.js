/* eslint-disable react/jsx-max-depth */
/* eslint-disable func-style */
/* eslint-disable sort-imports */
import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from '../containers/NavBar';
import Stock from '../containers/Stock';
import Companies from '../containers/Companies';
import Forex from '../containers/Forex';
import StockDetail from '../containers/stockDetails';
import '../styles/App.css';
import store from '../store';

function Routes() {
  return (
    <Provider store={store}>
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
        </Switch>
      </Router>
    </Provider>
  );
}

export default Routes;
