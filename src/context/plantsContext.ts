import { createContext } from 'react';

import { PlantType } from '../Components/customHooks/usePlants';

const plantsContext = createContext<{ cache : boolean | undefined, setPlants : React.Dispatch<React.SetStateAction<PlantType[]>> }>({
    cache: undefined,
    setPlants: () => {}
});

export default plantsContext;