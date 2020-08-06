import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { PLANTS } from '../../graphqlQueries';

export type PlantType = { name : string, desc : string, watering : number, light : string };

type Function = (name : string | string[] | null | undefined) => {
    skip : number, 
    setSkip : React.Dispatch<React.SetStateAction<number>>,
    quantity : number,
    plants : Array<PlantType>,
    error : any,
    loading : boolean,
    setMore : React.Dispatch<React.SetStateAction<boolean>>
};

export const usePlants : Function = (name = "") => {

    const [skip, setSkip] = useState<number>(1);
    const [quantity, setQuantity] = useState<number>(0);
    const [plants, setPlants] = useState<Array<PlantType>>([]);
    const [more, setMore] = useState<boolean>(false);
    const { loading, error, data } = useQuery(PLANTS, {
        variables: {
            skip,
            name
        }
    });

    useEffect(() => {
        if (!loading && !error) {
            if (more) setPlants((prevState : Array<PlantType>) => [...prevState, ...data.plants]);
            if (skip === 1) setPlants([...data.plants]);
            setQuantity(data.quantity);
        }
    }, [loading, data, error, more, skip]);

    return { skip, setSkip, quantity, plants, error, loading, setMore }
}