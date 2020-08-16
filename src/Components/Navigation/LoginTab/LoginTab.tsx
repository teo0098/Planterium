import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'js-cookie';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import { motion, AnimatePresence } from 'framer-motion';

import LoginTabStyles from './LoginTab.module.scss';

const LoginTab : React.FC = () => {

    const [menu, setMenu] = useState<boolean>(false);
    const ref : any = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const hideMenu = (e : any) => menu && !ref.current.contains(e.target) ? setMenu(false) : null;
        window.addEventListener('click', hideMenu);
        return () => window.removeEventListener('click', hideMenu);
    }, [menu]);

    return (
        cookies.get('user') === undefined ?
        <Link className={LoginTabStyles.LoginTab} to='/login'> Login </Link>
        :
        <div ref={ref} onClick={() => setMenu(!menu)} className={LoginTabStyles.LoginTab}>
            <ArrowDownIcon />
            {cookies.get('user')}
            <AnimatePresence>
                {menu && (  
                    <motion.nav className={LoginTabStyles.LoginTab__nav}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                        <Link className={LoginTabStyles.LoginTab__item} to='/account'> Account </Link>
                        <span className={LoginTabStyles.LoginTab__item}> Log out </span>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    ) 
}

export default React.memo(LoginTab);