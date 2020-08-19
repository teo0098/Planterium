import React, { useState, useContext } from 'react';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDownRounded';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@material-ui/core/Button';

import ColumnLayoutStyles from './ColumnLayout.module.scss';
import buttonStyles from '../../../../tsStyleSettings/buttonStyles';
import PlantContext from '../../../../context/plantContext';
import PlantFlowerIcon from '../PlantFlowerIcon/PlantFlowerIcon';
import PlantSectionInfo from '../PlantSectionInfo/PlantSectionInfo';
import useAddPlant from '../../../customHooks/useAddPlant';

const ColumnLayout : React.FC = () => {

    const [wrapDown, setWrapDown] = useState<boolean>(false);
    const { name, desc, watering, light } = useContext(PlantContext);
    const { handleAddPlant, renderStatus } = useAddPlant(name, desc, watering, light);

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
                        <PlantSectionInfo info="Description"> {desc} </PlantSectionInfo>
                        <PlantSectionInfo info="Watering"> Per {watering}h </PlantSectionInfo>
                        <PlantSectionInfo info="Light"> {light}  </PlantSectionInfo>
                        {renderStatus()}
                        <div className={ColumnLayoutStyles.Plant__div}>
                            <Button onClick={handleAddPlant} style={buttonStyles} variant="contained" color="primary">Add to my garden</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default ColumnLayout;