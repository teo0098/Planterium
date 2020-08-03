import { gql } from '@apollo/client';

export const PLANTS = gql`
    query GetPlants($skip : Int) {
        plants(skip : $skip) {
            name,
            desc,
            watering,
            light
        },
        quantity
    }
`;