import React from 'react';
import Layout from '../Layout/Layout';
import style from './footer.module.css';
import { Row, Col, NavLink, Image } from 'react-bootstrap';
import facebook from '../../assets/img/facebook.png';
import github from '../../assets/img/github.png';
import instagram from '../../assets/img/insta.png';
import linked from '../../assets/img/linked.png';

function Footer(){
   return(
      <div className={style.footer}>
         <Layout>
            <Row className='h-100'>
               <Col xs={12} md={4}>
                  <p>City Jakarta, Indonesia <br/> 089607266532 <br/> renalfrontend@gmail.com</p>
               </Col>
               <Col xs={6} md={2}>
                  <NavLink href='#'>Home</NavLink>
                  <NavLink href='#'>About Me</NavLink>
                  <NavLink href='#'>Services</NavLink>
               </Col>
               <Col xs={6} md={2}>
                  <NavLink href='#'>Experience</NavLink>
                  <NavLink href='#'>Portfolio</NavLink>
                  <NavLink href='#'>Contact</NavLink>
               </Col>
               <Col xs={12} md={4}>
                  <Row className={style.iconContainer}>
                     <Col xs={2} >
                        <div className={style.a}>
                           <NavLink>
                              <Image src={facebook} />
                           </NavLink>
                        </div>
                     </Col>
                     <Col xs={2}>
                        <div className={style.a}>
                           <NavLink>
                              <Image src={github} style={{background:'white'}} />
                           </NavLink>
                        </div>
                     </Col>
                     <Col xs={2}>
                        <div className={style.a}>
                           <NavLink>
                              <Image src={instagram} />
                           </NavLink>
                        </div>
                     </Col>
                     <Col xs={2}>
                        <div className={style.a}>
                           <NavLink>
                              <Image src={linked} />
                           </NavLink>
                        </div>
                     </Col>
                     <Col xs={12}>
                        <div>
                           <p>Copyright ©2020 All rights reserved</p>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Layout>
      </div>
   )
}

export default Footer;