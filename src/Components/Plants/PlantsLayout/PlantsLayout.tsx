import React, { useContext } from 'react';
import RowsIcon from '@material-ui/icons/Reorder';
import ColumnsIcon from '@material-ui/icons/ViewWeek';
import Button from '@material-ui/core/Button';

import PlantsLayoutStyles from './PlantsLayout.module.scss';
import buttonStyles from '../../../tsStyleSettings/buttonStyles';
import { PlantType } from '../../customHooks/usePlants';
import PlantsLayoutProps from './plantsLayoutProps';
import { color1, color4 } from '../../../tsStyleSettings/colors';
import usePlantsLayout from '../../customHooks/usePlantsLayout';
import { Link } from 'react-router-dom';
import ColumnLayout from './ColumnLayout/ColumnLayout'
import RowLayout from './RowLayout/RowLayout';
import PlantsContext from '../../../context/plantsContext';
import CustomPlant from './CustomPlant/CustomPlant';
import NotFound from './NotFound/NotFound';

const PlantsLayout : React.FC<PlantsLayoutProps> = ({ plants, loading, setSkip, children }) => {

    const [layout, changeLayout] = usePlantsLayout();
    const { cache, skip, quantity, searchName } = useContext(PlantsContext);

    return (
        <>
            <div className={PlantsLayoutStyles.Plants}>
                {children}
                {plants.length !== 0 ?
                    <>
                        <div className={PlantsLayoutStyles.Plants__layout}>
                            {!cache && !searchName ? <CustomPlant /> : null}
                            <div className={PlantsLayoutStyles.Plants__layouts}>
                                <RowsIcon style={{ fontSize: '30px', cursor: 'pointer', color: layout === 'rows' ? color1 : color4 }} 
                                onClick={() => changeLayout('rows')} />
                                <ColumnsIcon style={{ fontSize: '30px', cursor: 'pointer', color: layout === 'columns' ? color1 : color4 }} 
                                onClick={() => changeLayout('columns')} />
                            </div>
                        </div>
                        <div className={`${PlantsLayoutStyles.Plants__flowers} ${layout === 'columns' ? 
                            PlantsLayoutStyles['Plants__flowers--columns'] : PlantsLayoutStyles['Plants__flowers--rows']}`}>
                            {plants.map((plant : PlantType) => (
                                layout === 'columns' ? <ColumnLayout key={plant.name} plant={plant} /> : <RowLayout key={plant.name} plant={plant} />
                            ))}
                        </div>
                    </>
                    :
                    searchName ?
                        <NotFound> No results... </NotFound>
                        :
                        !cache && !loading ?
                            <NotFound>
                                Your garden is empty... Add some plants
                                <Link className={PlantsLayoutStyles.Plants__link} to="/plants"> here </Link>.
                            </NotFound>
                        : null
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