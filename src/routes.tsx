import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminLogin from './Admin/pages/Auth/AdminLogin';
import Home from './Shop/pages/Home';
// import { useQuery, gql } from '@apollo/client';
import Dashboard from './Admin/pages/Dashboard';

const Routes: React.FC = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={ShopComponent} />
            <Route path="/admin" component={AdminComponent} />
        </Switch>
    );
};

const AdminComponent = () => {
    // const IS_LOGGED_IN = gql`
    //     query IsUserLoggedIn {
    //         isLoggedIn @client
    //     }
    // `;

    // const IsLoggedIn = () => {
    //     const { data } = useQuery(IS_LOGGED_IN);
    //     console.log(data);
    //     return data.isLoggedIn ? (
    //         <Fragment>
    //             <Switch>
    //                 <Route exact path="/admin" component={Dashboard} />
    //             </Switch>
    //         </Fragment>
    //     ) : (
    //         <Route exact path="/admin/login" component={AdminLogin} />
    //     );
    // };

    return (
        <Fragment>
            <Route exact path="/admin/login" component={AdminLogin} />
            <Switch>
                <Route exact path="/admin" component={Dashboard} />
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
