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
    mutation AddPlant($name: String!, $desc: String!, $watering: Int!, $light: String!) {
        addPlant(name: $name, desc: $desc, watering: $watering, light: $light)
    }
`;