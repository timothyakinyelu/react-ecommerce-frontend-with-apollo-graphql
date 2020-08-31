import React from 'react';
import { AuthConsumer } from '../authContext';
import { Redirect } from 'react-router-dom';
import Login from './Auth/Login';

const Home: React.FC = (): JSX.Element => {
    return (
        <AuthConsumer>{({ authenticated }) => (authenticated ? <Redirect to="/dashboard" /> : <Login />)}</AuthConsumer>
    );
};

export default Home;
