import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-router-dom/NavLink';

function Navigation(props) {
    return (
        <div>
            <Navbar expand="lg" bg="dark" sticky="top">
            <NavLink className="nav-link" to="/">
                <div class="text-light">
                    <h1 class="nav-title-front">Olivia Hall</h1>
                </div>
                </NavLink>
                <ul class="navbar-nav ml-auto navitem-indent">
                    <li class="nav-item">
                        <NavLink to="/about">
                            <div class="nav-front text-light">About Me</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/portfolio">
                            <div class="nav-front text-light">Portfolio</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/contact">
                            <div class="nav-front text-light">Contact</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/resume">
                            <div class="nav-front text-light">Resume</div>
                        </NavLink>
                    </li>
                </ul>
            </Navbar>
        </div>
    )
}

export default Navigation;