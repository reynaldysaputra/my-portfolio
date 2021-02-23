import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Navbars from './components/Navbar/Navbar';
import Headers from './components/Header/Header';

ReactDOM.render(
  <React.StrictMode>
    <Navbars/>
    <Headers/>
  </React.StrictMode>,
  document.getElementById('root')
);

