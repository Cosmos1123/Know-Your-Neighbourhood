import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">KYN</Link>
                        
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile">Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/viewstore">View Store</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/aboutus">About us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contactus">Contact us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/termsCondition">Terms and condition</NavLink>
                                        </li>
                                        
                                        <li>
                                            <a onClick={this.props.onLogout}>LogOut</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                            <NavLink to="/login">LOGIN</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">SIGNUP</NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;