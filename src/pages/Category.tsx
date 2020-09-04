import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../graphql/query/categories';
import { AuthConsumer } from '../authContext';

const Category: React.FC = (): JSX.Element => {
    const { data, loading, error } = useQuery(GET_CATEGORIES);

    if (loading) return <p>...Loading</p>;
    if (error) {
        return <p>ERROR</p>;
    }
    if (!data) return <p>Not found</p>;

    const categories = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return data.categories.map((category: any) => (
            <div key={category.id}>
                <p>{category.parent_id}</p>
                <p>{category.name}</p>
            </div>
        ));
    };

    return <AuthConsumer>{({ user }) => user && categories()}</AuthConsumer>;
};

export default Category;
