import React from 'react';

import Routes from './routes';
import { ApolloProvider } from '@apollo/client';
import { client } from './config';
import Auth from './Auth';
import './App.css';

function App(): JSX.Element {
    return (
        <ApolloProvider client={client}>
            <Auth>
                <Routes />
            </Auth>
        </ApolloProvider>
    );
}

export default App;
