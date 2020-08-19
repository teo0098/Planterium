import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';

import PlantContext from '../../../../context/plantContext';
import RowLayoutStyles from './RowLayout.module.scss';
import PlantFlowerIcon from '../PlantFlowerIcon/PlantFlowerIcon';
import PlantSectionInfo from '../PlantSectionInfo/PlantSectionInfo';
import buttonStyles from '../../../../tsStyleSettings/buttonStyles';
import useAddPlant from '../../../customHooks/useAddPlant';

const RowLayout : React.FC = () => {

    const { name, desc, watering, light } = useContext(PlantContext);
    const { handleAddPlant, renderStatus } = useAddPlant(name, desc, watering, light);

    return (
        <section className={RowLayoutStyles.Plant}>
            <section className={RowLayoutStyles.Plant__flower}>
                <PlantFlowerIcon />
                <h3 className={RowLayoutStyles.Plant__h3}> {name} </h3>
            </section>
            <div className={RowLayoutStyles.Plant__info}>
                <PlantSectionInfo info="Description"> {desc} </PlantSectionInfo>
                <PlantSectionInfo info="Watering">  Per {watering}h </PlantSectionInfo>
                <PlantSectionInfo info="Light"> {light} </PlantSectionInfo>
                {renderStatus()}
                <div className={RowLayoutStyles.Plant__div}>
                    <Button onClick={handleAddPlant} style={buttonStyles} variant="contained" color="primary">Add to my garden</Button>
                </div>
            </div>
        </section>
    )
}

export default RowLayout;