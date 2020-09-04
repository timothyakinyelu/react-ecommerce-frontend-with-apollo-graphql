import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            id
            name
            parent_id
            slug
        }
    }
`;
