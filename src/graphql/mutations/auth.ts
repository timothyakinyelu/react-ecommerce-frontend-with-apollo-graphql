import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation LoginUser($input: LoginInput!) {
        login(login: $input) {
            tokens {
                access_token
                expires_in
            }
            user {
                id
                first_name
                last_name
                email
            }
        }
    }
`;
