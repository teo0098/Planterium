import React from 'react';

import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { usePlants } from '../customHooks/usePlants';
import PlantsLayout from './PlantsLayout/PlantsLayout';
import Navigation from '../Navigation/Navigation';
import SearchEngine from './SearchEngine/SearchEngine';
import PlantsProps from './plantsProps';
import PlantsCacheContext from '../../context/plantsCacheContext';

const Plants : React.FC<PlantsProps> = ({ cache }) => {

    const { skip, setSkip, error, loading, quantity, plants, plantName, setPlantName } = usePlants(cache);

    return (
        <>
            <Navigation variant={2} />
            {error ? <Error> Unable to retrieve plants. Please try again later. </Error> : null}
            {loading ? <Loading /> : null}
            {!error ? 
                <PlantsCacheContext.Provider value={cache}>
                    <PlantsLayout plantName={plantName} skip={skip} setSkip={setSkip} loading={loading} quantity={quantity} plants={plants}>
                        <SearchEngine setSkip={setSkip} setPlantName={setPlantName} />
                    </PlantsLayout>
                </PlantsCacheContext.Provider>
                : null}
        </>
    )
}

export default Plants;