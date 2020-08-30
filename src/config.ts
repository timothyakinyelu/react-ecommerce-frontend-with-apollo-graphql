/* eslint-disable @typescript-eslint/no-explicit-any */
import { InMemoryCache, HttpLink, fromPromise, ApolloClient, NormalizedCacheObject, from } from '@apollo/client';
import authHelper from './authHelper';
import { onError } from '@apollo/client/link/error';
import { REFRESH_TOKEN } from './graphql/mutations/auth';
import { IS_LOGGED_IN } from './graphql/query/auth';
import { typeDefs } from './graphql/resolvers';

const cache = new InMemoryCache();
const token = authHelper.get();
const checked = authHelper.isChecked(token || '');

// check if token has expired and then send header without bearer
const httpLink = new HttpLink({
    uri: 'http://localhost:8000/graphql',
    headers: {
        authorization: checked ? 'Bearer ' + token : token,
        accept: 'application/json',
        // Cookie: localStorage.getItem('cookie'),
    },
    credentials: 'include',
});

// let apolloClient: ApolloClient<unknown>;
let isRefreshing = false;
let pendingRequests: Array<any> = [];

const resolvePendingRequests = () => {
    pendingRequests.map((callback: () => any) => callback());
    pendingRequests = [];
};

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            // handle error based on its code
            switch (err.extensions?.code) {
                case 401:
                    let forward$;

                    if (!isRefreshing) {
                        isRefreshing = true;
                        forward$ = fromPromise(
                            getNewToken()
                                .then((access_token) => {
                                    resolvePendingRequests();
                                    localStorage.setItem('token', access_token);
                                })
                                .catch((error: any) => {
                                    console.log(error);
                                    return pendingRequests;
                                })
                                .finally(() => {
                                    return isRefreshing;
                                }),
                        ).filter((value) => Boolean(value));
                    } else {
                        forward$ = fromPromise(
                            new Promise((resolve) => {
                                pendingRequests.push(() => resolve());
                            }),
                        );
                    }

                    return forward$.flatMap(() => forward(operation));
            }
        }
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const getNewToken = () => {
    return client.mutate({ mutation: REFRESH_TOKEN }).then((response) => {
        const { access_token } = response.data.refreshToken;
        return access_token;
    });
};

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: from([errorLink, httpLink]),
    typeDefs,
});

cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
        isLoggedIn: !!localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user') || '{}'),
    },
});
