import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header.component';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import Posts from './pages/posts.component';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/posts' component={Posts} />

        <Route path='*' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
