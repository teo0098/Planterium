import React, { useState } from 'react';

import Logo from './Logo/Logo';
import NavigationStyles from './Navigation.module.scss';
import LoginTab from './LoginTab/LoginTab';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import NavigationProps from './navigationProps';

const Navigation : React.FC<NavigationProps> = ({ variant }) => {

    const [menuOn, setMenuOn] = useState<boolean>(false);

    return (
        <header className={`${NavigationStyles.Navigation} ${variant === 1 ? NavigationStyles['Navigation--absolute'] : NavigationStyles['Navigation--relative']}`}>
            <Hamburger menuOn={menuOn} setMenuOn={setMenuOn} />
            <div className={NavigationStyles.Navigation__logo}>
                <Logo />
            </div>
            <LoginTab />
            <Menu menuOn={menuOn} setMenuOn={setMenuOn} />
        </header>
    )
}

export default Navigation;