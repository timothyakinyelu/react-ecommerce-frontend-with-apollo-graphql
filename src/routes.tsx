import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Auth/Login';
// import { useQuery, gql } from '@apollo/client';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Category from './pages/Category';

const Routes: React.FC = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/categories" component={Category} />
        </Switch>
    );
};

export default Routes;
