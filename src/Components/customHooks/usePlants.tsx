import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { PLANTS } from '../../graphqlQueries';

export type PlantType = { name: string, desc : string, watering : number, light : string };

type Function = () => {
    skip : number, 
    setSkip : React.Dispatch<React.SetStateAction<number>>,
    quantity : number,
    plants : Array<PlantType>,
    error : any,
    loading : boolean
};

export const usePlants : Function = () => {

    const [skip, setSkip] = useState<number>(1);
    const [quantity, setQuantity] = useState<number>(0);
    const [plants, setPlants] = useState<Array<PlantType>>([]);
    const { loading, error, data } = useQuery(PLANTS, {
        variables: {
            skip
        }
    });

    useEffect(() => {
        if (!loading && !error) {
            setPlants(prevState => [...prevState, ...data.plants]);
            setQuantity(data.quantity);
        }
    }, [loading, data, error]);

    return { skip, setSkip, quantity, plants, error, loading }
}