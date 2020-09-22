import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Auth/Login';
// import { useQuery, gql } from '@apollo/client';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Category from './pages/Category';
import NavBar from './components/navigation/NavBar';
import SideBar from './components/navigation/SideBar';

const Routes: React.FC = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Fragment>
                <div className="headerBrand">
                    <div className="logo flex items-center flex-shrink-0 text-white mr-6">
                        <svg
                            className="fill-current h-8 w-8 mr-2"
                            width="54"
                            height="54"
                            viewBox="0 0 54 54"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                        </svg>
                        <span className="brand font-semibold text-xl tracking-tight">shopProject</span>
                    </div>
                </div>
                <NavBar />
                <div className="s-layout">
                    <SideBar />
                    <main className="s-layout__content">
                        <div id="analytics" className="tab-pane">
                            <div className="inner-main">
                                <Route path="/dashboard" component={Dashboard} />
                                <Route path="/categories" component={Category} />
                            </div>
                        </div>
                    </main>
                </div>
            </Fragment>
        </Switch>
    );
};

export default Routes;
