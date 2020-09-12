import React from 'react';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDownRounded';
import InfoIcon from '@material-ui/icons/InfoOutlined';

import ColumnLayoutStyles from './ColumnLayout.module.scss';
import PlantFlowerIcon from '../PlantFlowerIcon/PlantFlowerIcon';
import useEditPlant from '../../../customHooks/useEditPlant';
import PlantProps from '../plantProps';

const ColumnLayout : React.FC<PlantProps> = ({ plant: { name, desc, watering, light, watered, irrigation } }) => {

    const { 
        renderAddStatus, renderButton, renderInfo, renderRemoveStatus, renderWaterStatus,
        wrapDown, setWrapDown
    } = useEditPlant(name, desc, watering, light, watered, irrigation);

    return (
        <section className={ColumnLayoutStyles.Plant} onClick={() => setWrapDown(!wrapDown)}>  
            <PlantFlowerIcon />
            <h3 className={ColumnLayoutStyles.Plant__h3}> {name} </h3>
            <div className={ColumnLayoutStyles.Plant__info}>
                <InfoIcon style={{ fontSize: '30px' }} />
                <ArrowDownIcon style={{ fontSize: '60px' }} />
            </div>
            {wrapDown ?
                <div>
                    {renderInfo()}
                    {renderAddStatus()}
                    {renderRemoveStatus()}
                    {renderWaterStatus()}
                    <div className={ColumnLayoutStyles.Plant__div}>
                        {renderButton()}
                    </div>
                </div>
                : null
            }
        </section>
    )
}

export default ColumnLayout;