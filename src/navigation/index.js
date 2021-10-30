import React from 'react';

import NavBar from './NavBar';
import TitleBar from './TitleBar';

import '../styles/Navigation.css';

function NavigationBar() {
    return (
        <div className="navbar-container p-py-6">
            <div className="p-d-flex p-py-3">
                <NavBar />
            </div>
            <div className="p-d-flex p-p-6 p-text-left">
                <TitleBar />
            </div>
        </div>
    )
}

export default NavigationBar
