import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation AddUser($nickname: String!, $email: String!, $password: String!) {
        addUser(nickname: $nickname, email: $email, password: $password)
    }
`;

export const LOGIN = gql`
    mutation Login($login: String!, $password: String!) {
        login(login: $login, password: $password)
    }
`;

export const ADD_PLANT = gql`
    mutation AddPlant($name: String!, $desc: String!, $watering: Int!, $light: String!, $lastWatered: String!) {
        addPlant(name: $name, desc: $desc, watering: $watering, light: $light, lastWatered: $lastWatered)
    }
`;

export const LOGOUT = gql`
    mutation {
        logout
    }
`;

export const REMOVE_PLANT = gql`
    mutation RemovePlant($name: String!, $searchName: String, $skip: Int!, $quantity: Int!) {
        removePlant(name: $name, searchName: $searchName, skip: $skip, quantity: $quantity) {
            name,
            desc,
            watering,
            light,
            watered,
            irrigation
        }
    }
`;

export const WATER_PLANT = gql`
    mutation WaterPlant($name: String!, $lastWatered: String!) {
        waterPlant(name: $name, lastWatered: $lastWatered)
    }
`;

export const CREATE_CUSTOM_PLANT = gql`
    mutation CreateCustomPlant($name: String!, $watering: Int!, $desc: String, $light: String, $lastWatered: String!) {
        createCustomPlant(name: $name, watering: $watering, desc: $desc, light: $light, lastWatered: $lastWatered) {
            name,
            desc,
            watering,
            light,
            watered,
            irrigation
        }
    }
`;