import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../containers/NavBar'
import Stock from '../containers/Stock'
import Companies from '../containers/Companies'
import Forex from '../containers/Forex'
import '../styles/App.css';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Companies} />
        <Route exact path='/stock' component={Stock} />
        <Route exact path='/forex' component={Forex} />
      </Switch>
      </Router>
    </Provider>
  );
};

export default App;
