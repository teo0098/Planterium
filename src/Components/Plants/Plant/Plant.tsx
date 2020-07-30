import React, { useState } from 'react';
import FlowerIcon from '@material-ui/icons/FilterVintage';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDownRounded';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import { motion, AnimatePresence } from 'framer-motion';

import PlantProps from './plantProps';
import PlantStyles from './Plant.module.scss';
import { color1 } from '../../../tsStyleSettings/colors';

const Plant : React.FC<PlantProps> = ({ plant, index }) => {

    const [wrapDown, setWrapDown] = useState<boolean>(false);

    return (
        <motion.section className={PlantStyles.Plant}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeInOut' }}
        >
            <div className={PlantStyles.Plant__flowerIcon}>
                <FlowerIcon style={{ fontSize: '60px', color: color1 }} />
            </div>
            <h3 className={PlantStyles.Plant__h3}> {plant.name} </h3>
            <div className={PlantStyles.Plant__info}>
                <InfoIcon onClick={() => setWrapDown(!wrapDown)} style={{ fontSize: '30px', cursor: 'pointer' }} />
                <ArrowDownIcon onClick={() => setWrapDown(!wrapDown)} style={{ fontSize: '60px', cursor: 'pointer' }} />
            </div>
            <AnimatePresence>
                {wrapDown && (
                    <motion.div
                    initial={{ height: 0, overflow: 'hidden' }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}>
                        <article className={PlantStyles.Plant__section}>
                            <mark className={PlantStyles.Plant__mark}>Description:</mark>
                            <p className={PlantStyles.Plant__article}> {plant.desc} </p>
                        </article>
                        <section className={PlantStyles.Plant__section}>
                            <mark className={PlantStyles.Plant__mark}>Watering: </mark>
                            <span>Per {plant.watering}h</span>
                        </section>
                        <section className={PlantStyles.Plant__section}>
                            <mark className={PlantStyles.Plant__mark}>Light:</mark>
                            <span> {plant.light} </span>
                        </section>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    ) 
}

export default Plant;