import React from 'react';
import {Navbar, Nav, Image, Container} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import style from './navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

function Navbars(){
   return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={style.nav}>
         <Container>
            <Navbar.Brand as={Link} to='home' smooth='easeInOutCubic' className={style.navBrand}>
               <Image src={logo} alt='Logo' className={style.logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border : '0px'}}>
               <FontAwesomeIcon icon={faBars} className={style.iconMenu}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
               <Nav>
                  <Link to='home' smooth='easeInOutCubic' className={style.navlink}>home</Link>
                  <Link to='aboutMe' smooth='easeInOutCubic' offset={-130} className={style.navlink}>about me</Link>
                  <Link to='work' smooth='easeInOutCubic' offset={-130} className={style.navlink}>how work</Link>
                  <Link to='portfolio' smooth='easeInOutCubic' offset={-100} className={style.navlink}>portfolio</Link>
                  <Link to='contact' offset={-140} smooth='easeInOutCubic' className={style.navlink}>contact</Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Navbars;