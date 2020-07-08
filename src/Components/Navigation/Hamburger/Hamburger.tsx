import React from 'react';

import HamburgerStyles from './Hamburger.module.scss';
import HamburgerProps from './hamburgerProps';
import useHamburger from '../../customHooks/useHamburger';

const Hamburger : React.FC<HamburgerProps> = ({ menuOn, setMenu }) => {

    const { hamburgerRef } = useHamburger(menuOn);

    return (
        <div onClick={setMenu} className={HamburgerStyles.Hamburger}>
            <div ref={hamburgerRef} className={HamburgerStyles.Hamburger__dashes}></div>
        </div>
    )
} 

export default Hamburger;