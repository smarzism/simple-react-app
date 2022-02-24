import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home.page';
import Login from './pages/Login.page';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/register' component={} />
          <Route path='/user/:id' component={} /> 
          <Route path='*' component={NotFound} />*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
