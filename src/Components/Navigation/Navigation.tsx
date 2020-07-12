import React from 'react';

import Logo from './Logo/Logo';
import NavigationStyles from './Navigation.module.scss';
import LoginTab from './LoginTab/LoginTab';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import useNavigation from '../customHooks/useNavigation';
import NavigationProps from './navigationProps';

const Navigation : React.FC<NavigationProps> = ({ variant }) => {

    const { menuOn, setMenu } = useNavigation();

    return (
        <header className={`${NavigationStyles.Navigation} ${variant === 1 ? NavigationStyles['Navigation--absolute'] : NavigationStyles['Navigation--relative']}`}>
            <Hamburger menuOn={menuOn} setMenu={setMenu} />
            <div className={NavigationStyles.Navigation__logo}>
                <Logo />
            </div>
            <LoginTab />
            <Menu menuOn={menuOn} setMenu={setMenu} />
        </header>
    )
}

export default Navigation;