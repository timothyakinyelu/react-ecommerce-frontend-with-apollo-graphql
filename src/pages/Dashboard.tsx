import React, { Fragment } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_USERS } from '../graphql/query/users';
import { AuthConsumer } from '../authContext';
import '../styles/dashboard.css';

const Dashboard: React.FC = (): JSX.Element => {
    // const { data, loading, error } = useQuery<User>(GET_USERS);

    // if (loading) return <p>...Loading</p>;
    // if (error) {
    //     return <p>ERROR</p>;
    // }
    // if (!data) return <p>Not found</p>;

    return (
        <AuthConsumer>
            {({ user }) =>
                user && (
                    <Fragment>
                        <div id="analytics" className="tab-pane fade active in">
                            <div className="content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="revenue">
                                            <h4>
                                                Revenue <small className="pull-right">January 2017</small>
                                            </h4>
                                            <img src="https://bit.ly/2YZsc8R" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="">
                                            <div className="active-clients">
                                                <h4>Active Clients</h4>
                                                <h6>
                                                    <small> You’re currently in </small>
                                                    TOP 10%
                                                    <small>
                                                        {' '}
                                                        of Workspace <br /> platform your rating is{' '}
                                                    </small>
                                                    4.85.
                                                    <small>Keep up great work!</small>
                                                </h6>
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Rating</td>
                                                                <td width="70%">
                                                                    <div className="progress">
                                                                        <div
                                                                            className="progress-bar progress-bar-success"
                                                                            role="progressbar"
                                                                            aria-valuenow={Number('72')}
                                                                            aria-valuemin={Number('0')}
                                                                            aria-valuemax={Number('100')}
                                                                            style={{ width: '72%' }}
                                                                        >
                                                                            <span className="sr-only">
                                                                                72% Complete (success)
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-right">72%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Budget</td>
                                                                <td width="70%">
                                                                    <div className="progress">
                                                                        <div
                                                                            className="progress-bar progress-bar-warning"
                                                                            role="progressbar"
                                                                            aria-valuenow={Number('42.6')}
                                                                            aria-valuemin={Number('0')}
                                                                            aria-valuemax={Number('100')}
                                                                            style={{ width: '42.6%' }}
                                                                        >
                                                                            <span className="sr-only">
                                                                                42.6% Complete (success)
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-right">42.6%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Timing</td>
                                                                <td width="70%">
                                                                    <div className="progress">
                                                                        <div
                                                                            className="progress-bar progress-bar-primary"
                                                                            role="progressbar"
                                                                            aria-valuenow={Number('89.2')}
                                                                            aria-valuemin={Number('0')}
                                                                            aria-valuemax={Number('100')}
                                                                            style={{ width: '89.2%' }}
                                                                        >
                                                                            <span className="sr-only">
                                                                                89.2% Complete (success)
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-right">89.2%</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="tasks">
                                                <h4>Tasks</h4>
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Completed</td>
                                                                <td className="text-right">340</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total</td>
                                                                <td className="text-right">520</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Monthly Average</td>
                                                                <td className="text-right">2454</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <hr />
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Rating</td>
                                                                <td width="70%">
                                                                    <div className="progress">
                                                                        <div
                                                                            className="progress-bar progress-bar-success"
                                                                            role="progressbar"
                                                                            aria-valuenow={Number('65.3')}
                                                                            aria-valuemin={Number('0')}
                                                                            aria-valuemax={Number('100')}
                                                                            style={{ width: '65.3%' }}
                                                                        >
                                                                            <span className="sr-only">
                                                                                65.3% Complete (success)
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-right">65.3%</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row total-stats">
                                    <div className="col-sm-3">
                                        <div className="stats-card">
                                            <span className="orange-chart">
                                                <i className="fa fa-line-chart fa-lg"></i>
                                            </span>
                                            <h3>
                                                {' '}
                                                $9,587
                                                <small>
                                                    <i className="fa fa-caret-up"></i>
                                                </small>
                                                <br />
                                                <small>
                                                    TOTAL PROFIT <b className="text-success">(+$286)</b>
                                                </small>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="stats-card">
                                            <span className="purple-chart">
                                                <i className="fa fa-pie-chart fa-lg"></i>
                                            </span>
                                            <h3>
                                                $2,190{' '}
                                                <small>
                                                    <i className="fa fa-caret-up"></i>
                                                </small>
                                                <br />
                                                <small>
                                                    REVENUE <b className="text-success">(+$286)</b>
                                                </small>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="stats-card">
                                            <span className="red-chart">
                                                <i className="fa fa-pie-chart fa-lg"></i>
                                            </span>
                                            <h3>
                                                {' '}
                                                93{' '}
                                                <small>
                                                    <i className="fa fa-caret-down"></i>
                                                </small>
                                                <br />
                                                <small>
                                                    ACTIVE CLIENTS <b className="text-red">(-2)</b>
                                                </small>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="stats-card">
                                            <span className="green-chart">
                                                <i className="fa fa-pie-chart fa-lg"></i>
                                            </span>
                                            <h3>
                                                $431{' '}
                                                <small>
                                                    <i className="fa fa-caret-up"></i>
                                                </small>
                                                <br />
                                                <small>
                                                    PROFIT <b className="text-success"> (+$3.11)</b>
                                                </small>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="income-customers">
                                            <div className="table-responsive">
                                                <h4>
                                                    Recent Income
                                                    <small className="pull-right">
                                                        <a href="#">View All</a>
                                                    </small>
                                                </h4>
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img
                                                                    src="https://bit.ly/2Km1kf6"
                                                                    alt=""
                                                                    className="img-circle"
                                                                />
                                                            </td>
                                                            <td>Minnie Ferguson</td>
                                                            <td>One Page Dashboard</td>
                                                            <td>$150</td>
                                                            <td>3 Days ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img
                                                                    src="https://bit.ly/2OWjYOV"
                                                                    alt=""
                                                                    className="img-circle"
                                                                />
                                                            </td>
                                                            <td>Ann Hunter</td>
                                                            <td>New Website </td>
                                                            <td>$150</td>
                                                            <td>3 Days ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img
                                                                    src="https://bit.ly/31Fs8wF"
                                                                    alt=""
                                                                    className="img-circle"
                                                                />
                                                            </td>
                                                            <td>Wedding</td>
                                                            <td>New Website</td>
                                                            <td>$150</td>
                                                            <td>3 Days ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img
                                                                    src="https://bit.ly/2Km1kf6"
                                                                    alt=""
                                                                    className="img-circle"
                                                                />
                                                            </td>
                                                            <td>Minnie Ferguson</td>
                                                            <td>One Page Dashboard</td>
                                                            <td>$150</td>
                                                            <td>3 Days ago</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="income-customers">
                                            <div className="table-responsive">
                                                <h4>
                                                    Best Customers
                                                    <small className="pull-right">
                                                        <a href="#">View All</a>
                                                    </small>
                                                </h4>
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img
                                                                    src="https://bit.ly/2Km1kf6"
                                                                    alt=""
                                                                    className="img-circle"
                                                                />
                                                            </td>
                                                            <td>Minnie Ferguson</td>
                                                            <td>One Page Dashboard</td>
                                                            <td>$150</td>
                                                            <td>3 Days ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img
                                                                    src="https://bit.ly/2OWjYOV"
                                                                    alt=""
                                                                    className="img-circle"
                                                                />
                                                            </td>
                                                            <td>Ann Hunter</td>
                                                            <td>New Website </td>
                                                            <td>$150</td>
                                                            <td>3 Days ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img
                                                                    src="https://bit.ly/31Fs8wF"
                                                                    alt=""
                                                                    className="img-circle"
                                                                />
                                                            </td>
                                                            <td>Wedding</td>
                                                            <td>New Website</td>
                                                            <td>$150</td>
                                                            <td>3 Days ago</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img
                                                                    src="https://bit.ly/2Km1kf6"
                                                                    alt=""
                                                                    className="img-circle"
                                                                />
                                                            </td>
                                                            <td>Minnie Ferguson</td>
                                                            <td>One Page Dashboard</td>
                                                            <td>$150</td>
                                                            <td>3 Days ago</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        </AuthConsumer>
    );
};

export default Dashboard;
