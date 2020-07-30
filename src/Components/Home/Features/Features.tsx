import React from 'react';
import { AnimatePresence } from 'framer-motion';

import FeaturesStyles from './Features.module.scss';
import { features, FeatureType } from './feature';
import useScroll from '../../customHooks/useScroll';
import Feature from './Feature/Feature';

const Features : React.FC = () => {

    const { ref, scrolled } = useScroll();

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