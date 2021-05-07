import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Statistiques from './components/pages/Statistiques';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Patch_notes from './components/pages/Patch_notes';
import Team from './components/pages/Team';
import Champions from './components/pages/Champions';
import E_sport from './components/pages/E_sport';
import { useState } from 'react';

function App() {

  const [setToken] = useState('');

  const userLogin = (tok) => {
    console.log(tok);
    setToken(tok);
  }
  

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/statistiques' component={Statistiques} />
          <Route path='/team' component={Team} />
          <Route path='/patch-notes' component={Patch_notes} />
          <Route path='/champions' component={Champions} />
          <Route path='/e-sport' component={E_sport} />
          <Route path='/sign-in' component={SignIn} userLogin={userLogin}/>
          <Route path='/sign-up' component={SignUp} />
        </Switch>
       </Router>
    </>
  );
}

export default App;
