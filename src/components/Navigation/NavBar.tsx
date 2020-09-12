import React from 'react';
import '../../styles/navbar.css';
import SearchBox from '../../reusables/SearchBox';
import NotificationIcon from '../../reusables/NotificationIcon';
import LoggedIcon from '../../reusables/LoggedIcon';
import { AuthConsumer } from '../../authContext';

const NavBar: React.FC = (): JSX.Element => {
    return (
        <AuthConsumer>
            {({ user }) => (
                <nav className="navbar flex items-center justify-between flex-wrap bg-teal-500 p-6">
                    {/* <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div> */}
                    <ul className="navbar-icons">
                        <li className="notification-icon">
                            <NotificationIcon />
                        </li>
                        <li className="search-box">
                            <SearchBox />
                        </li>
                        <LoggedIcon user={user} />
                    </ul>
                </nav>
            )}
        </AuthConsumer>
    );
};

export default NavBar;
