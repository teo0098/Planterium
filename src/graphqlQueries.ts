import { gql } from '@apollo/client';

export const PLANTS = gql`
    query GetPlants($skip : Int!, $name : String, $user : String) {
        plants(skip : $skip, name : $name, user : $user) {
            name,
            desc,
            watering,
            light,
            watered,
            irrigation
        },
        quantity(name : $name, user : $user)
    }
`;

export const IS_AUTH = gql`
    {
        isAuth
    }
`;