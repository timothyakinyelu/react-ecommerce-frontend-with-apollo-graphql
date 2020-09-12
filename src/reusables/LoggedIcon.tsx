import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/loggedicon.css';

interface LoggedProps {
    user: User;
}
const LoggedIcon: React.FC<LoggedProps> = ({ user }): JSX.Element => {
    const [show, setShow] = useState(false);

    const toggleProfile = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <li className="profile-container">
            <div className="half" onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>): void => toggleProfile(e)}>
                <label htmlFor="profile" className="profile-dropdown">
                    {/* <input type="checkbox" id="profile2" onChange={() => toggleProfile} /> */}
                    <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png" />
                    <span>
                        {user.first_name} {user.last_name}
                    </span>
                    <label htmlFor="profile2">
                        <i className="mdi mdi-chevron-down"></i>
                    </label>
                    {show && (
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
                                    <i className="mdi mdi-cogs"></i>Settings
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="mdi mdi-logout"></i>Logout
                                </a>
                            </li>
                        </ul>
                    )}
                </label>
            </div>
        </li>
    );
};

LoggedIcon.propTypes = {
    user: PropTypes.object.isRequired,
};

export default LoggedIcon;
