import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Auth/Login';
// import { useQuery, gql } from '@apollo/client';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const Routes: React.FC = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Routes;
