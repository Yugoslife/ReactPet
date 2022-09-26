import React, { Component } from "react";

// State Functional Component - 
// - функциональный компонент без сохранения состояния

const NavBar = (props) => {
    console.log('NavBar - Rendered')

        return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/something">
        Navbar {' '}
        <span className="badge bg-pill bg-secondary">
            {props.totalCounters}
        </span>
        </a>
        </div>
        </nav>
    )
};

export default NavBar;