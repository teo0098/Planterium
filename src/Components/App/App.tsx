import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useLazyQuery } from "@apollo/client";
import cookies from 'js-cookie';

import AppStyles from './App.module.scss';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Login from '../Credentials/Login/Login';
import Signup from '../Credentials/Signup/Signup';
import Plants from '../Plants/Plants';
import Account from '../Account/Account';
import { IS_AUTH } from '../../graphqlQueries';

const App : React.FC = () => {

    const [isAuth] = useLazyQuery(IS_AUTH);

    useEffect(() => {
        if (cookies.get('user') !== undefined) isAuth();
    }, [isAuth]);
    
    return (
      <div className={AppStyles.App}>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/plants' render={props => <Plants {...props} cache />} />
            <Route path='/garden' component={Account} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
}

export default App;