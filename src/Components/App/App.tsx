import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppStyles from './App.module.scss';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Login from '../Credentials/Login/Login';
import Signup from '../Credentials/Signup/Signup';

const App : React.FC = () => (
  <div className={AppStyles.App}>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
    <Footer />
  </div>
)

export default App;