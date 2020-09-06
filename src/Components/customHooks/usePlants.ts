import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { PLANTS } from '../../graphqlQueries';

export type PlantType = { name : string, desc : string, watering : number, light : string, watered : string | null, irrigation : number | null };

type Function = (cache : boolean | undefined) => {
    skip : number, 
    setSkip : React.Dispatch<React.SetStateAction<number>>,
    quantity : number,
    plants : Array<PlantType>,
    error : any,
    loading : boolean,
    searchName : string,
    setSearchName : React.Dispatch<React.SetStateAction<string>>,
    setPlants : React.Dispatch<React.SetStateAction<PlantType[]>>,
    setQuantity : React.Dispatch<React.SetStateAction<number>>
};

export const usePlants : Function = (cache) => {

    const [skip, setSkip] = useState<number>(1);
    const [quantity, setQuantity] = useState<number>(0);
    const [plants, setPlants] = useState<Array<PlantType>>([]);
    const [searchName, setSearchName] = useState<string>('');
    const { loading, error, data } = useQuery(PLANTS, {
        variables: {
            skip,
            name: searchName.toLowerCase(),
            user: !cache ? 'user' : ''
        },
        fetchPolicy: !cache ? 'no-cache' : 'cache-first'
    });

    useEffect(() => {
        if (!loading && !error) {
            setPlants((prevState : Array<PlantType>) => [...prevState, ...data.plants]);
            if (skip === 1) setPlants([...data.plants]);
            setQuantity(data.quantity);
        }
    }, [loading, data, error, skip]);

    return { skip, setSkip, quantity, plants, error, loading, searchName, setSearchName, setPlants, setQuantity }
}