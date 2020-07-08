import React from 'react';
import { Link } from 'react-router-dom';

import LoginTabStyles from './LoginTab.module.scss';

const LoginTab : React.FC = () => (
    <Link className={LoginTabStyles.LoginTab} to='/login'> Login </Link>
)

export default React.memo(LoginTab);