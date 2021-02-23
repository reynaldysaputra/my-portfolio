import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Navbars from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbars/>
  </React.StrictMode>,
  document.getElementById('root')
);

