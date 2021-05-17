import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../containers/NavBar'
import Stock from '../containers/Stock'
import Companies from '../containers/Companies'
import Forex from '../containers/Forex'
import StockDetail from '../containers/stockDetails';
import '../styles/App.css';
import store from '../store';

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Stock} />
        <Route exact path='/company' component={Companies} />
        <Route exact path='/forex' component={Forex} />
        <Route exact path='/stockDetail/:ticker' component={StockDetail} />
      </Switch>
      </Router>
    </Provider>
  )
}

export default Routes