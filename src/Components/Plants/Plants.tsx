import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import Navigation from '../Navigation/Navigation';
import PlantsStyles from './Plants.module.scss';
import { PLANTS } from '../../graphqlQueries';
import Plant from './Plant/Plant';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

type Plant = { name: string, desc : string, watering : number, light : string };

const Plants : React.FC = () => {

    const { loading, error, data } = useQuery(PLANTS);

    return (
        <>
            <Navigation variant={2} />
            {loading ? <Loading /> : null}
            {error ? <Error> Unable to retrieve plants... Please try again later. </Error> : null}
            {!loading && !error ?
                <>
                    <div className={PlantsStyles.Plants}>
                        {data.plants.map((plant : Plant, index : number) => (
                            <Plant key={plant.name} plant={plant} index={index} />
                        ))}
                    </div>
                </>
                : null}
        </>
    )
}

export default Plants;