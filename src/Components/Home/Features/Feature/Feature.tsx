import React from 'react';
import { motion } from 'framer-motion';

import FeatureStyles from './Feature.module.scss';
import FeatureProps from './featureProps';

const Feature : React.FC<FeatureProps> = ({ index, icon, desc }) => {
    return (
        <motion.section 
        initial={{ opacity: 0, x: '20%' }}
        animate={{ opacity: 1, x: '0' }}
        transition={{ delay: index * 0.5, type: 'tween'}}
        className={FeatureStyles.Feature}>
            {icon}
            <p className={FeatureStyles.Feature__p}> {desc} </p>
        </motion.section>
    )
}

export default Feature;