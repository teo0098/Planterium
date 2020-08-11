import React from 'react';

import HamburgerStyles from './Hamburger.module.scss';
import HamburgerProps from './hamburgerProps';
import useHamburger from '../../customHooks/useHamburger';

const Hamburger : React.FC<HamburgerProps> = ({ menuOn, setMenuOn }) => {

    const { hamburgerRef } = useHamburger(menuOn);

    return (
        <div onClick={() => setMenuOn(prevState => !prevState)} className={HamburgerStyles.Hamburger}>
            <div ref={hamburgerRef} className={HamburgerStyles.Hamburger__dashes}></div>
        </div>
    )
} 

export default Hamburger;