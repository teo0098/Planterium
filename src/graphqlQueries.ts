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

export const CREATE_USER = gql`
    mutation AddUser($nickname: String!, $email: String!, $password: String!) {
        addUser(nickname: $nickname, email: $email, password: $password) {
            nickname
        }
    }
`;