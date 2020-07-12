import React from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import FormLayout from '../FormLayout/FormLayout';

const Credentials : React.FC = ({ children }) => (
    <React.Fragment>
        <Navigation variant={2} />
        <FormLayout>
            <div>
                <NavLink to='/login'> Login </NavLink>
                <NavLink to='/signup'> Signup </NavLink>
            </div>
            {children}
        </FormLayout>
    </React.Fragment>
)

export default Credentials;