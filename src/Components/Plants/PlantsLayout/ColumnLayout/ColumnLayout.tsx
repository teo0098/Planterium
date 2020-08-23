import React, { useState } from 'react';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDownRounded';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import { motion, AnimatePresence } from 'framer-motion';

import ColumnLayoutStyles from './ColumnLayout.module.scss';
import PlantFlowerIcon from '../PlantFlowerIcon/PlantFlowerIcon';
import useAddPlant from '../../../customHooks/useAddPlant';
import PlantProps from '../plantProps';

const ColumnLayout : React.FC<PlantProps> = ({ plant: { name, desc, watering, light, watered, irrigation } }) => {

    const [wrapDown, setWrapDown] = useState<boolean>(false);
    const { renderStatus, renderButton, renderInfo } = useAddPlant(name, desc, watering, light, watered, irrigation);

    return (
        <section className={ColumnLayoutStyles.Plant} onClick={() => setWrapDown(!wrapDown)}>  
            <PlantFlowerIcon />
            <h3 className={ColumnLayoutStyles.Plant__h3}> {name} </h3>
            <div className={ColumnLayoutStyles.Plant__info}>
                <InfoIcon style={{ fontSize: '30px' }} />
                <ArrowDownIcon style={{ fontSize: '60px' }} />
            </div>
            <AnimatePresence>
                {wrapDown && (
                    <motion.div
                    initial={{ height: 0, overflow: 'hidden' }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}>
                        {renderInfo()}
                        {renderStatus()}
                        <div className={ColumnLayoutStyles.Plant__div}>
                            {renderButton()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default ColumnLayout;