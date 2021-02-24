import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Navbars from './components/Navbar/Navbar';
import Headers from './components/Header/Header';
import Layout from './components/Layout/Layout';
import AboutMe from './components/About/About';
import Services from './components/Service/Service';

ReactDOM.render(
  <React.StrictMode>
    <Navbars/>
    <Headers/>
    <AboutMe/>
    <Services/>
  </React.StrictMode>,
  document.getElementById('root')
);

