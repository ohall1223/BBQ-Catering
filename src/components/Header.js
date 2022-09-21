import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from '../components/Navigation';
import About from "../components/About";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm"
import Resume from "./Menu"

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Navigation></Navigation>
                </header>

                <div className="content">
                    <Route exact path="/" render={() => <Redirect to="/about" />} />
                    <Route path="/about" component={About} />
                    <Route path="/gallery" component={Gallery} /> 
                    <Route path="/contact" component={ContactForm} />
                    <Route path="/resume" component={Resume} />
                </div>
            </HashRouter>
        );
    }
}

export default Header