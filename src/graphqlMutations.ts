import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation AddUser($nickname: String!, $email: String!, $password: String!) {
        addUser(nickname: $nickname, email: $email, password: $password) {
            nickname
        }
    }
`;

export const LOGIN = gql`
    mutation Login($login: String!, $password: String!) {
        login(login: $login, password: $password)
    }
`;