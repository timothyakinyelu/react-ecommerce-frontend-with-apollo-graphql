import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminLogin from './Admin/pages/Auth/AdminLogin';
import Home from './Shop/pages/Home';

const Routes: React.FC = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={ShopComponent} />
            <Route exact path="/admin" component={AdminComponent} />
        </Switch>
    );
};

const AdminComponent = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/admin" component={AdminLogin} />
            </Switch>
        </Fragment>
    );
};

const ShopComponent = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Fragment>
    );
};

export default Routes;
