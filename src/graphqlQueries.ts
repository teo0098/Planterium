import { gql } from '@apollo/client';

export const PLANTS = gql`
    query GetPlants($skip : Int!, $name : String) {
        plants(skip : $skip, name : $name) {
            name,
            desc,
            watering,
            light
        },
        quantity(name : $name)
    }
`;

export const IS_AUTH = gql`
    {
        isAuth
    }
`;