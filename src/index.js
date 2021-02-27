import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Navbars from './components/Navbar/Navbar';
import Headers from './components/Header/Header';
import AboutMe from './components/About/About';
import Services from './components/Service/Service';
import Timeline from './components/Timeline/Timeline';
import Portfolio from './components/Portfolio/Portfolio';
import Review from './components/ClientReview/Review';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbars/>
    <Headers/>
    <AboutMe/>
    <Services/>
    <Timeline/>
    <Portfolio/>
    <Review/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

