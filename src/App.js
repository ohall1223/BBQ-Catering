import React from 'react';

import About from './components/About';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div> 
            <Header/>
            <Footer/>
        </div>
    )
}

export default App;