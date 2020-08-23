import React, { memo } from 'react';
import FlowerIcon from '@material-ui/icons/FilterVintage';

import { color1 } from '../../../../tsStyleSettings/colors';
import PlantFLowerIconStyles from './PlantFlowerIcon.module.scss';

const PlantFlowerIcon : React.FC = () => (
    <div className={PlantFLowerIconStyles.PlantFlowerIcon}>
        <FlowerIcon style={{ fontSize: '60px', color: color1 }} />
    </div>
)

export default memo(PlantFlowerIcon);