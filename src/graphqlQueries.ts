import { gql } from '@apollo/client';

export const PLANTS = gql`
    query getPlants {
        plants {
            name,
            desc,
            watering,
            light
        }
    }
`;