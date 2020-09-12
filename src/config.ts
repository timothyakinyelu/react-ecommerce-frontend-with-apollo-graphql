/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    InMemoryCache,
    HttpLink,
    ApolloClient,
    NormalizedCacheObject,
    fromPromise,
    concat,
    defaultDataIdFromObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { REFRESH_TOKEN } from './graphql/mutations/auth';
import { IS_LOGGED_IN } from './graphql/query/auth';
import { typeDefs, resolvers } from './graphql/resolvers';
import __url__ from './__url__';
import authHelper from './authHelper';
import { setContext } from '@apollo/client/link/context';
import { GET_TOASTS } from './graphql/query/toast';

const cache = new InMemoryCache({
    dataIdFromObject: (object) => {
        switch (object.__typename) {
            case 'Toast':
                return `Toast:${object.id}`;
            default:
                return defaultDataIdFromObject(object);
        }
    },
    typePolicies: {
        Query: {
            keyFields: ['toasts'],
            fields: {
                toasts: {
                    merge: false,
                },
            },
        },
        Mutation: {
            fields: {
                addOrRemoveToast: {
                    merge: false,
                },
            },
        },
    },
});

const httpLink = new HttpLink({
    uri: __url__.baseUrl(),
    credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    const checked = authHelper.isChecked(token || '');

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: checked ? `Bearer ${token}` : token,
        },
    };
});

let isRefreshing = false;
let pendingRequests: Array<any> = [];

const setIsRefreshing = (value: boolean) => {
    isRefreshing = value;
};

const addPendingRequests = (pendingRequest: any) => {
    pendingRequests.push(pendingRequest);
};

const resolvePendingRequests = () => {
    pendingRequests.map((callback: () => any) => callback());
    pendingRequests = [];
};

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
        // for (const err of graphQLErrors) {
        const err = graphQLErrors[0];

        // handle error based on its code
        switch (err.extensions?.code) {
            case 401:
                // let forward$;
                let forward$;

                if (!isRefreshing) {
                    setIsRefreshing(true);
                    forward$ = fromPromise(
                        getNewToken()
                            .then((access_token: string) => {
                                // Store the new tokens for your auth link
                                resolvePendingRequests();
                                return access_token;
                            })
                            .catch((error: any) => {
                                console.log(error);
                                addPendingRequests([]);
                                // Handle token refresh errors e.g clear stored tokens, redirect to login, ...
                                return;
                            })
                            .finally(() => {
                                setIsRefreshing(false);
                            }),
                    ).filter((value) => Boolean(value));
                } else {
                    // Will only emit once the Promise is resolved
                    forward$ = fromPromise(
                        new Promise((resolve) => {
                            addPendingRequests(() => resolve());
                        }),
                    );
                }

                return forward$.flatMap(() => forward(operation));
        }
        // }
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: concat(errorLink, concat(authLink, httpLink)),
    typeDefs,
    resolvers,
});

export const getNewToken = (): any => {
    return client.mutate({ mutation: REFRESH_TOKEN }).then((response) => {
        const { access_token } = response.data.refreshToken;
        localStorage.removeItem('token');

        localStorage.setItem('token', access_token);

        return access_token;
    });
};

cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
        isLoggedIn: !!localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user') || '{}'),
    },
});

cache.writeQuery({
    query: GET_TOASTS,
    data: {
        toasts: [],
    },
});
