import { useEffect, useRef } from 'react';

import HamburgerStyles from '../Navigation/Hamburger/Hamburger.module.scss';

type Function = (menuOn : boolean) => any;

const useHamburger : Function = (menuOn : boolean) => {

    const hamburgerRef : any = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        menuOn ? hamburgerRef.current.classList.add(`${HamburgerStyles['Hamburger__dashes--close']}`) : hamburgerRef.current.classList.remove(`${HamburgerStyles['Hamburger__dashes--close']}`);
    }, [menuOn]);

    return hamburgerRef;
}

export default useHamburger;