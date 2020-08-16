import React, { useState } from 'react';

import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { usePlants } from '../customHooks/usePlants';
import PlantsLayout from './PlantsLayout/PlantsLayout';
import Navigation from '../Navigation/Navigation';
import SearchEngine from './SearchEngine/SearchEngine';

const Plants : React.FC = () => {

    const [plantName, setPlantName] = useState<string>('');
    const { skip, setSkip, error, loading, quantity, plants } = usePlants(plantName.toLowerCase());

    return (
        <>
            <Navigation variant={2} />
            {error ? <Error> Unable to retrieve plants. Please try again later. </Error> : null}
            {loading ? <Loading /> : null}
            {!error ? 
                <PlantsLayout plantName={plantName} skip={skip} setSkip={setSkip} loading={loading} quantity={quantity} plants={plants}>
                    <SearchEngine setSkip={setSkip} setPlantName={setPlantName} />
                </PlantsLayout>
                : null}
        </>
    )
}

export default Plants;