import React from 'react';

import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { usePlants } from '../customHooks/usePlants';
import PlantsLayout from './PlantsLayout/PlantsLayout';
import Navigation from '../Navigation/Navigation';
import SearchEngine from './SearchEngine/SearchEngine';
import PlantsProps from './plantsProps';
import PlantsContext from '../../context/plantsContext';

const Plants : React.FC<PlantsProps> = ({ cache }) => {

    const { skip, setSkip, error, loading, quantity, plants, searchName, setSearchName, setPlants, setQuantity } = usePlants(cache);

    return (
        <>
            <Navigation variant={2} />
            {error ? <Error> Unable to retrieve plants. Please try again later. </Error> : null}
            {loading ? <Loading /> : null}
            {!error ? 
                <PlantsContext.Provider value={{ cache, setPlants, setQuantity, searchName, skip, quantity }}>
                    <PlantsLayout setSkip={setSkip} loading={loading} plants={plants}>
                        <SearchEngine setSkip={setSkip} setSearchName={setSearchName} />
                    </PlantsLayout>
                </PlantsContext.Provider>
                : null}
        </>
    )
}

export default Plants;