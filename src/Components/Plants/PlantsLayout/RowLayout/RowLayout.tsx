import React from 'react';

import RowLayoutStyles from './RowLayout.module.scss';
import PlantFlowerIcon from '../PlantFlowerIcon/PlantFlowerIcon';
import useAddPlant from '../../../customHooks/useAddPlant';
import PlantProps from '../plantProps';

const RowLayout : React.FC<PlantProps> = ({ plant: { name, desc, watering, light, watered, irrigation } }) => {

    const { renderStatus, renderButton, renderInfo } = useAddPlant(name, desc, watering, light, watered, irrigation);

    return (
        <section className={RowLayoutStyles.Plant}>
            <section className={RowLayoutStyles.Plant__flower}>
                <PlantFlowerIcon />
                <h3 className={RowLayoutStyles.Plant__h3}> {name} </h3>
            </section>
            <div className={RowLayoutStyles.Plant__info}>
                {renderInfo()}
                {renderStatus()}
                <div className={RowLayoutStyles.Plant__div}>
                    {renderButton()}
                </div>
            </div>
        </section>
    )
}

export default RowLayout;