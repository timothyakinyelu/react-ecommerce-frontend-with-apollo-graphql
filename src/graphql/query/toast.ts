import { gql } from '@apollo/client';

export const GET_TOASTS = gql`
    query getToast {
        toasts @client
    }
`;
