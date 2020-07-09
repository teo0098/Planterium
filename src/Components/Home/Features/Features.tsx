import React from 'react';
import { AnimatePresence } from 'framer-motion';

import FeaturesStyles from './Features.module.scss';
import { features, FeatureType } from './feature';
import useFeatures from '../../customHooks/useFeatures';
import Feature from './Feature/Feature';

const Features : React.FC = () => {

    const { ref, scrolled } = useFeatures();

    return (
        <div ref={ref} className={FeaturesStyles.Features}>
            <AnimatePresence>
                {scrolled && (
                    features.map((feature : FeatureType, index : number) => (
                        <Feature key={index} index={index} icon={feature.icon} desc={feature.desc} />
                    ))
                )}
            </AnimatePresence>
        </div>
    )
}

export default Features;