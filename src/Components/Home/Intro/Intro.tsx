import React from 'react';
import FlowerIcon from '@material-ui/icons/FilterVintage';
import { motion } from 'framer-motion';

import IntroStyles from './Intro.module.scss';
import Words from './Words/Words';

const Intro : React.FC = () => (
    <div className={IntroStyles.Intro}>
        <header className={IntroStyles.Intro__header}>
            <h1 className={IntroStyles.Intro__h1}>Place, where you can <Words/> manage your garden</h1>
        </header>
        <motion.div
        className={IntroStyles.Intro__icon}
        animate={{ transform: 'rotate(360deg)' }}
        transition={{ loop: Infinity, ease: "linear", duration: 30 }}>
            <FlowerIcon style={{ fontSize: '200px' }} />
        </motion.div>
    </div>
)

export default Intro;