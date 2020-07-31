import { createContext } from 'react';

type plantContextType = { name : string, desc : string, watering : number, light : string };

const PlantContext = createContext<plantContextType>({
    name: '',
    desc: '',
    watering: 24,
    light: ''
});

export default PlantContext;