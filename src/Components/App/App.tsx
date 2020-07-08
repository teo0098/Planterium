import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppStyles from './App.module.scss';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const App : React.FC = () => (
  <div className={AppStyles.App}>
    <div>
      <Navigation />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
    <Footer />
  </div>
)

export default App;