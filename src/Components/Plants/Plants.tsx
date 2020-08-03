import React from 'react';

import Navigation from '../Navigation/Navigation';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { usePlants } from '../customHooks/usePlants';
import PlantsLayout from './PlantsLayout/PlantsLayout';

const Plants : React.FC = () => {

    const { skip, setSkip, error, loading, quantity, plants } = usePlants();

    return (
        <>
            <Navigation variant={2} />
            {error ? <Error> Unable to retrieve plants... Please try again later. </Error> : null}
            {loading ? <Loading /> : null}
            {plants.length !== 0 ? 
                <PlantsLayout skip={skip} setSkip={setSkip} loading={loading} quantity={quantity} plants={plants} />
                : null}
        </>
    )
}

export default Plants;