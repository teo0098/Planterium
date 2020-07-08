import React from 'react';

import Logo from './Logo/Logo';
import NavigationStyles from './Navigation.module.scss';
import LoginTab from './LoginTab/LoginTab';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import useNavigation from '../customHooks/useNavigation';

const Navigation : React.FC = () => {

    const { menuOn, setMenu } = useNavigation();

    return (
        <header className={NavigationStyles.Navigation}>
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