import { useState, useEffect, useRef } from 'react'

type Function = () => { menu : boolean, setMenu : React.Dispatch<React.SetStateAction<boolean>>, ref : any, handleLogout: () => void };

const useLoginTab : Function = () => {

    const [menu, setMenu] = useState<boolean>(false);
    const ref : any = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const hideMenu = (e : any) => menu && !ref.current.contains(e.target) ? setMenu(false) : null;
        window.addEventListener('click', hideMenu);
        return () => window.removeEventListener('click', hideMenu);
    }, [menu]);

    const handleLogout = () => {
        alert(10);
    }
    
    return { menu, setMenu, ref, handleLogout };
}

export default useLoginTab;