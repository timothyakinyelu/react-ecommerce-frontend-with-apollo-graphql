import React from 'react';
import '../styles/loggedicon.css';

const LoggedIcon: React.FC = (): JSX.Element => {
    return (
        <li className="profile-container">
            <div className="half">
                <label htmlFor="profile2" className="profile-dropdown">
                    <input type="checkbox" id="profile2" />
                    <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png" />
                    <span>John Doe</span>
                    <label htmlFor="profile2">
                        <i className="mdi mdi-menu"></i>
                    </label>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="mdi mdi-email-outline"></i>Messages
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="mdi mdi-account"></i>Account
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="mdi mdi-settings"></i>Settings
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="mdi mdi-logout"></i>Logout
                            </a>
                        </li>
                    </ul>
                </label>
            </div>
        </li>
    );
};

export default LoggedIcon;
