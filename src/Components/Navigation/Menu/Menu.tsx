import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import MenuStyles from './Menu.module.scss';
import { parentVariants, childVariants, childVariants2 } from './animationsVariants';
import MenuProps from './menuProps';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import useMenu from '../../customHooks/useMenu';

const Menu : React.FC<MenuProps> = ({ menuOn, setMenu }) => {

    const { menuRef, hideMenu } = useMenu(setMenu);

    return (
        <AnimatePresence>
            {menuOn && (
                <motion.div 
                key="menu"
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={hideMenu} className={MenuStyles.Menu}>
                    <motion.div 
                    variants={childVariants}
                    ref={menuRef} className={MenuStyles.Menu__options}>
                        <motion.div 
                        variants={childVariants2}
                        className={MenuStyles.Menu__hamburger}>
                            <Hamburger menuOn={menuOn} />
                        </motion.div>
                        <motion.div
                        style={{ pointerEvents: 'none' }}
                        variants={childVariants2}>
                            <Logo />
                        </motion.div>
                        <motion.nav 
                        variants={childVariants2}
                        className={MenuStyles.Menu__nav}>
                            <Link className={MenuStyles.Menu__link} to='/'> Home </Link>
                            <Link className={MenuStyles.Menu__link} to='/plants'> Plants </Link>
                            <Link className={MenuStyles.Menu__link} to='/contact'> Contact us </Link>
                        </motion.nav>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Menu;