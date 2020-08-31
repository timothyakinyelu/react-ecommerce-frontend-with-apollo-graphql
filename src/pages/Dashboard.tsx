import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/query/users';
import { AuthConsumer } from '../authContext';

const Dashboard: React.FC = (): JSX.Element => {
    const { data, loading, error } = useQuery<User>(GET_USERS);

    if (loading) return <p>...Loading</p>;
    if (error) {
        return <p>ERROR</p>;
    }
    if (!data) return <p>Not found</p>;

    return (
        <AuthConsumer>
            {({ user }) => (
                <div>
                    <p>Hello</p>
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                </div>
            )}
        </AuthConsumer>
    );
};

export default Dashboard;
