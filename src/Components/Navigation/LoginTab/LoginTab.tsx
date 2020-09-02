import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'js-cookie';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import { motion, AnimatePresence } from 'framer-motion';

import LoginTabStyles from './LoginTab.module.scss';
import useLoginTab from '../../customHooks/useLoginTab';

const LoginTab : React.FC = () => {

    const { menu, setMenu, ref, signOut, renderStatus, redirect } = useLoginTab();

    return (
        <>
            {redirect()}
            {cookies.get('user') === undefined ?
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
                                <Link className={LoginTabStyles.LoginTab__item} to='/garden'> My garden </Link>
                                <span onClick={signOut} className={LoginTabStyles.LoginTab__item}> {renderStatus()} </span>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            }
        </>
    ) 
}

export default memo(LoginTab);