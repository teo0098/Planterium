import { createContext } from 'react';

import { PlantType } from '../Components/customHooks/usePlants';

type PlantsContextType = { 
    cache : boolean | undefined, 
    setPlants : React.Dispatch<React.SetStateAction<PlantType[]>>,
    setQuantity : React.Dispatch<React.SetStateAction<number>>,
    searchName : string | undefined,
    skip : number,
    quantity : number
}

const plantsContext = createContext<PlantsContextType>({
    cache: undefined,
    setPlants: () => {},
    setQuantity: () => {},
    searchName: '',
    skip: 1,
    quantity: 0
});

export default plantsContext;