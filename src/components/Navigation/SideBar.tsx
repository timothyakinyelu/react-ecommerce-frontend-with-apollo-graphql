import React from 'react';
import '../../styles/sidebar.css';
import { Link } from 'react-router-dom';

const SideBar: React.FC = (): JSX.Element => {
    return (
        <div className="s-layout__sidebar">
            <a className="s-sidebar__trigger" href="#0">
                <i className="fa fa-bars"></i>
            </a>

            <nav className="s-sidebar__nav">
                <ul>
                    <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="mdi mdi-view-dashboard"></i>
                            <em>Dashboard</em>
                        </a>
                    </li>
                    <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="mdi mdi-book-variant-multiple"></i>
                            <em>Catalog</em>
                        </a>
                        <ul>
                            <li>
                                <a href="#">Brands</a>
                            </li>
                            <li>
                                <Link to="categories">Categories</Link>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Product Reviews</a>
                            </li>
                            <li>
                                <a href="#">Product Tags</a>
                            </li>
                            <li>
                                <a href="#">Attributes</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="fa fa-users"></i>
                            <em>Customers</em>
                        </a>
                    </li>
                    <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="mdi mdi-cart-arrow-down"></i>
                            <em>Sales</em>
                        </a>
                    </li>
                    <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="fa fa-tags"></i>
                            <em>Promotions</em>
                        </a>
                    </li>
                    <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="mdi mdi-cogs"></i>
                            <em>Configuration</em>
                        </a>
                    </li>
                    <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="mdi mdi-desktop-mac-dashboard"></i>
                            <em>System</em>
                        </a>
                    </li>
                    <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="mdi mdi-chart-line"></i>
                            <em>Reports</em>
                        </a>
                    </li>
                    <li>
                        <a className="s-sidebar__nav-link" href="#0">
                            <i className="mdi mdi-wrench-outline "></i>
                            <em>Help</em>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
