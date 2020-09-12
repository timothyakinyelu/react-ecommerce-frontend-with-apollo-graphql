/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AuthProvider } from './authContext';
import PropTypes from 'prop-types';
import { IS_LOGGED_IN } from './graphql/query/auth';
import { useQuery, useApolloClient, useMutation, ApolloClient } from '@apollo/client';
import authHelper from './authHelper';
import { LOGIN_USER } from './graphql/mutations/auth';
import { TOGGLE_TOAST } from './graphql/mutations/toast';

const Auth: React.FC = (props): JSX.Element => {
    const { data } = useQuery(IS_LOGGED_IN);
    const id = Math.floor(Math.random() * 100 + 1);

    const client: ApolloClient<unknown> = useApolloClient();
    const [loginUser] = useMutation<LoginData>(LOGIN_USER, {
        onCompleted({ login }) {
            localStorage.setItem('token', login.tokens.access_token);
            localStorage.setItem('user', JSON.stringify(login.user));

            client.writeQuery({
                query: IS_LOGGED_IN,
                data: {
                    isLoggedIn: true,
                    user: login.user,
                },
            });
        },
        onError(err) {
            const toast = {
                id: id,
                title: 'AUTHENTICATION ERROR',
                message: err.message,
                backgroundColor: 'error',
            };

            mutate({
                variables: {
                    toast: toast,
                },
            });
        },
    });

    const [mutate] = useMutation(TOGGLE_TOAST);

    const handleAuthentication = (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault();

        loginUser({
            variables: {
                input: {
                    email: email,
                    password: password,
                },
            },
        });
    };

    const logout = (): any => {
        authHelper.remove();
    };

    const authProviderValue = {
        authenticated: data.isLoggedIn,
        user: data.user,
        handleAuthentication: (e: React.FormEvent<HTMLFormElement>, email: string, password: string): void =>
            handleAuthentication(e, email, password),
        logout: (): void => logout(),
    };

    return <AuthProvider value={authProviderValue}>{props.children}</AuthProvider>;
};

Auth.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Auth;
