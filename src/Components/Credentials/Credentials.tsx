import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginIcon from '@material-ui/icons/VpnKey';
import SignUpIcon from '@material-ui/icons/AssignmentInd';

import Navigation from '../Navigation/Navigation';
import FormLayout from '../FormLayout/FormLayout';
import CredentialsStyles from './Credentials.module.scss';
import iconsStyles from './spaceOficons';

const Credentials : React.FC = ({ children }) => (
    <React.Fragment>
        <Navigation variant={2} />
        <FormLayout>
            <div className={CredentialsStyles.Credentials}>
                <NavLink activeClassName={CredentialsStyles['Credentials__link--active']} className={`${CredentialsStyles.Credentials__link} ${CredentialsStyles['Credentials__link--login']}`} to='/login'>
                    <LoginIcon style={iconsStyles} />
                    <span> Login </span>
                </NavLink>
                <NavLink activeClassName={CredentialsStyles['Credentials__link--active']} className={CredentialsStyles.Credentials__link} to='/signup'>
                    <SignUpIcon style={iconsStyles} />
                    <span> Sign up </span>
                </NavLink>
            </div>
            {children}
        </FormLayout>
    </React.Fragment>
)

export default Credentials;