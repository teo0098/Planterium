import { useRef } from 'react';

type Function = (setMenuOn : React.Dispatch<React.SetStateAction<boolean>>) => { menuRef : any, hideMenu : (e : any) => void | null };

const useMenu : Function = setMenuOn => {

    const menuRef = useRef<HTMLDivElement | null>(null);

    const hideMenu = (e : any) => e.target !== menuRef.current ? setMenuOn(false) : null;

    return { menuRef, hideMenu }
}

export default useMenu;