import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query GetCategories($currentPage: Int) {
        categories(page: $currentPage) {
            data {
                id
                name
                published
            }
            pageData {
                total
                lastPage
                currentPage
                perPage
                path
            }
        }
    }
`;
