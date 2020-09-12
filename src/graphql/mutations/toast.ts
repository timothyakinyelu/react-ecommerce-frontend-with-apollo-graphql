import { gql } from '@apollo/client';

export const TOGGLE_TOAST = gql`
    mutation addOrRemoveToast($toast: Toast!) {
        addOrRemoveToast(toast: $toast) @client
    }
`;
