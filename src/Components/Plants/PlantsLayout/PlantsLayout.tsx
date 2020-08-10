import React, { useState } from 'react';
import RowsIcon from '@material-ui/icons/Reorder';
import ColumnsIcon from '@material-ui/icons/ViewWeek';
import Button from '@material-ui/core/Button';
import NotFound from '@material-ui/icons/SentimentVeryDissatisfied';

import PlantsLayoutStyles from './PlantsLayout.module.scss';
import Plant from '../Plant/Plant';
import PlantContext from '../../../context/plantContext';
import buttonStyles from '../../../tsStyleSettings/buttonStyles';
import { PlantType } from '../../customHooks/usePlants';
import PlantsLayoutProps from './plantsLayoutProps';
import { color1, color4 } from '../../../tsStyleSettings/colors';

const PlantsLayout : React.FC<PlantsLayoutProps> = ({ plants, skip, quantity, loading, setSkip, children }) => {

    const [layout, setLayout] = useState<string | null>(localStorage.getItem('layout') === null || window.screen.width <= 900 ? 'columns' : localStorage.getItem('layout'));

    const changeLayout = (newLayout : string) => {
        localStorage.setItem('layout', newLayout);
        setLayout(newLayout);
    }

    return (
        <>
            <div className={PlantsLayoutStyles.Plants}>
                {children}
                {plants.length !== 0 ?
                    <>
                        <div className={PlantsLayoutStyles.Plants__layout}>
                            <RowsIcon style={{ fontSize: '30px', cursor: 'pointer', color: layout === 'rows' ? color1 : color4 }} 
                            onClick={() => changeLayout('rows')} />
                            <ColumnsIcon style={{ fontSize: '30px', cursor: 'pointer', color: layout === 'columns' ? color1 : color4 }} 
                            onClick={() => changeLayout('columns')} />
                        </div>
                        <div className={`${PlantsLayoutStyles.Plants__flowers} ${layout === 'columns' ? 
                            PlantsLayoutStyles['Plants__flowers--columns'] : PlantsLayoutStyles['Plants__flowers--rows']}`}>
                            {plants.map((plant : PlantType) => (
                                <PlantContext.Provider key={plant.name} value={plant}>
                                    <Plant layout={layout} />
                                </PlantContext.Provider>
                            ))}
                        </div>
                    </>
                    :
                    <div className={PlantsLayoutStyles.Plants__notFound}>
                        <NotFound style={{ fontSize: '80px' }} />
                        <h3 className={PlantsLayoutStyles.Plants__h3}> No results... </h3>
                    </div>
                }
            </div>
            {skip * 5 < quantity ?
                <div className={PlantsLayoutStyles.PlantsMore}>
                    <Button disabled={loading ? true : false} 
                    onClick={() => setSkip(prevState => ++prevState)} 
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