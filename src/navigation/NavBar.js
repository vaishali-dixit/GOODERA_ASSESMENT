import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className="p-col-2">
                JobHunt
            </div>
            <div className="p-col-2">
                <NavLink to="/explore" className="nav-bar-link" activeClassName="active-link">
                    Find Jobs
                </NavLink>
            </div>
            <div className="p-col-2">
                <NavLink to="/post" className="nav-bar-link" activeClassName="active-link">
                    Post a Job
                </NavLink>
            </div>
            <div className="p-col-5 p-text-right p-pr-6">
                <Link to="/">Sign out</Link>
            </div>
        </>
    )
}

export default NavBar
