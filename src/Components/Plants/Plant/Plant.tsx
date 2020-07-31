import React from 'react';

import PlantProps from './plantProps';
import ColumnLayout from './ColumnLayout/ColumnLayout';
import RowLayout from './RowLayout/RowLayout';

const Plant : React.FC<PlantProps> = ({ layout }) => (
    layout === 'columns' ? <ColumnLayout /> : <RowLayout />
) 

export default Plant;