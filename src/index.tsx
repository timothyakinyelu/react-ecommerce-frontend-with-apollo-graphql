import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './tailwind.output.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache, NormalizedCacheObject, ApolloProvider, HttpLink } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { typeDefs } from './graphql/resolvers';
import { IS_LOGGED_IN } from './graphql/query/auth';

const cache = new InMemoryCache();
const httpLink = new HttpLink({
    uri: 'http://localhost:8000/graphql',
    headers: {
        authorization: 'Bearer ' + localStorage.getItem('token'),
    },
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: httpLink,
    typeDefs,
});

cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
        isLoggedIn: !!localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user') || '{}'),
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
