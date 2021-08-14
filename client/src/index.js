import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Checkout from './Components/Checkout';

const Root = () => {
  return (
    <Router>
    <Switch>
      <Route component={App} exact path='/' />
      <Route component={Signin} exact path='/signin' />
      <Route component={Signup} exact path='/signup' />
      <Route component={Checkout} exact path='/checkout' />
    </Switch>
  </Router>
  )
};

ReactDOM.render( <Root /> , document.getElementById('root') );
