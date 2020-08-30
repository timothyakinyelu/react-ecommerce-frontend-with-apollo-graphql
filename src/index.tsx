/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './tailwind.output.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './Auth';
import { client } from './config';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Auth>
                <Router>
                    <App />
                </Router>
            </Auth>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
