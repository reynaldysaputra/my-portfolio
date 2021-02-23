import React from 'react';
import {Navbar, Nav, Image, Container} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import style from './navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function Navbars(){
   return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={style.nav}>
         <Container>
            <Navbar.Brand href="#home" className={style.navBrand}>
               <Image src={logo} alt='Logo' className={style.logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border : '0px'}}>
               <FontAwesomeIcon icon={faBars} className={style.iconMenu}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
               <Nav>
                  <Nav.Link className={style.navlink}>home</Nav.Link>
                  <Nav.Link className={style.navlink}>about me</Nav.Link>
                  <Nav.Link className={style.navlink}>how work</Nav.Link>
                  <Nav.Link className={style.navlink}>portfolio</Nav.Link>
                  <Nav.Link className={style.navlink}>contact</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Navbars;