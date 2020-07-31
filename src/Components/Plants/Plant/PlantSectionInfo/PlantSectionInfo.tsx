import React from 'react';

import PlantSectionInfoStyles from './PlantSectionInfo.module.scss';
import PlantSectionInfoProps from './plantSectionInfoProps';

const PlantSectionInfo : React.FC<PlantSectionInfoProps> = ({ children, info }) => (
    <section className={PlantSectionInfoStyles.PlantSectionInfo}>
        <p className={PlantSectionInfoStyles.PlantSectionInfo__article}>
            <mark className={PlantSectionInfoStyles.PlantSectionInfo__mark}>{info}: </mark>  
            {children} 
        </p>
    </section>
)

export default PlantSectionInfo;