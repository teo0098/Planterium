import React, { useState } from 'react';
import RowsIcon from '@material-ui/icons/Reorder';
import ColumnsIcon from '@material-ui/icons/ViewWeek';
import Button from '@material-ui/core/Button';

import PlantsLayoutStyles from './PlantsLayout.module.scss';
import Plant from '../Plant/Plant';
import PlantContext from '../../../context/plantContext';
import buttonStyles from '../../../tsStyleSettings/buttonStyles';
import { PlantType } from '../../customHooks/usePlants';
import PlantsLayoutProps from './plantsLayoutProps';
import { color1, color4 } from '../../../tsStyleSettings/colors';

const PlantsLayout : React.FC<PlantsLayoutProps> = ({ plants, skip, quantity, loading, setSkip, children, setMore }) => {

    const [layout, setLayout] = useState<string | null>(localStorage.getItem('layout') === null ? 'columns' : localStorage.getItem('layout'));

    const changeLayout = (newLayout : string) => {
        localStorage.setItem('layout', newLayout);
        setLayout(newLayout);
    }

    return (
        <>
            <div className={PlantsLayoutStyles.Plants}>
                {children}
                <div className={PlantsLayoutStyles.Plants__layout}>
                    <RowsIcon style={{ fontSize: '30px', cursor: 'pointer', color: layout === 'rows' ? color1 : color4 }} 
                    onClick={() => changeLayout('rows')} />
                    <ColumnsIcon style={{ fontSize: '30px', cursor: 'pointer', color: layout === 'columns' ? color1 : color4 }} 
                    onClick={() => changeLayout('columns')} />
                </div>
                <div style={{ gridTemplateColumns: layout === 'columns' ? 'repeat(3, 1fr)' : '1fr' }} 
                    className={PlantsLayoutStyles.Plants__flowers}>
                    {plants.map((plant : PlantType) => (
                        <PlantContext.Provider key={plant.name} value={plant}>
                            <Plant layout={layout} />
                        </PlantContext.Provider>
                    ))}
                </div>
            </div>
            {skip * 5 < quantity ?
                <div className={PlantsLayoutStyles.PlantsMore}>
                    <Button disabled={loading ? true : false} onClick={() => {
                        setSkip(prevState => ++prevState);
                        setMore(true);
                    }} 
                    style={buttonStyles} variant="contained" color="primary">
                        Show more plants
                    </Button>
                </div>
                : null
            }
        </>
    )
}

export default PlantsLayout;