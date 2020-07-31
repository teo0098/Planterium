import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import RowsIcon from '@material-ui/icons/Reorder';
import ColumnsIcon from '@material-ui/icons/ViewWeek';

import Navigation from '../Navigation/Navigation';
import PlantsStyles from './Plants.module.scss';
import { PLANTS } from '../../graphqlQueries';
import Plant from './Plant/Plant';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import PlantContext from '../../context/plantContext';

type Plant = { name: string, desc : string, watering : number, light : string };

const Plants : React.FC = () => {

    const { loading, error, data } = useQuery(PLANTS);
    const [layout, setLayout] = useState<string>('columns');

    return (
        <>
            <Navigation variant={2} />
            {loading ? <Loading /> : null}
            {error ? <Error> Unable to retrieve plants... Please try again later. </Error> : null}
            {!loading && !error ?
                <div className={PlantsStyles.Plants}>
                    <div className={PlantsStyles.Plants__layout}>
                        <RowsIcon style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => setLayout('rows')} />
                        <ColumnsIcon style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => setLayout('columns')} />
                    </div>
                    <div style={{ gridTemplateColumns: layout === 'columns' ? 'repeat(3, 1fr)' : '1fr' }} 
                        className={PlantsStyles.Plants__flowers}>
                        {data.plants.map((plant : Plant) => (
                            <PlantContext.Provider key={plant.name} value={plant}>
                                 <Plant layout={layout} />
                            </PlantContext.Provider>
                        ))}
                    </div>
                </div>
                : null}
        </>
    )
}

export default Plants;