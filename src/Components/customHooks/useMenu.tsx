import { useRef } from 'react';

type Function = (setMenu : () => void) => { menuRef : any, hideMenu : (e : any) => void | null };

const useMenu : Function = (setMenu : () => void) => {

    const menuRef = useRef<HTMLDivElement | null>(null);

    const hideMenu = (e : any) => e.target !== menuRef.current ? setMenu() : null;

    return { menuRef, hideMenu }
}

export default useMenu;