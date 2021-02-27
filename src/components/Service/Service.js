import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import style from './service.module.css';
import Layout from '../Layout/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDesktop, faFileCode, faSync, faLightbulb} from '@fortawesome/free-solid-svg-icons';

function Services(){
   return(
      <div className={style.serviceContainer}>
         <Layout>
            <Row>
               <Col className='text-center'>
                  <h1>MY SERVICES</h1>
               </Col>
            </Row>
            <Row className='justify-content-center'>
               <Col md={6} lg={3}>
                  <div className={style.boxService}>
                     <div className={style.iconBox}>
                        <FontAwesomeIcon icon={faDesktop} />
                     </div>

                     <h3>Responsive</h3>
                     <p>The website must be viewed properly on multiple screens. I make sure that your website can always be used optimally on any device.</p>
                  </div>
               </Col>
               <Col md={6} lg={3}>
                  <div className={style.boxService}>
                     <div className={style.iconBox}>
                        <FontAwesomeIcon icon={faFileCode}/>
                     </div>
                     <h3>Clean Code</h3>
                     <p>I always provide clean code to consumers so that the application is easy to understand and easy to develop in the future.</p>
                  </div>
               </Col>
               <Col md={6} lg={3}>
                  <div className={style.boxService}>
                     <div className={style.iconBox}>
                        <FontAwesomeIcon icon={faSync}/>
                     </div>
                     <h3>Restyling Website</h3>
                     <p>Is your website out of date or in need of repair? I can help you update it to become a modern, easy to use and responsive website.</p>
                  </div>
               </Col>
               <Col md={6} lg={3}>
                  <div className={style.boxService}>
                     <div className={style.iconBox}>
                        <FontAwesomeIcon icon={faLightbulb}/>
                     </div>
                     <h3>Innovative Ideas</h3>
                     <p>I am ready to start from scratch, or continue the ongoing projects. I always give innovative ideas to build the best applications.</p>
                  </div>
               </Col>
            </Row>
         </Layout>
      </div>
   )
}

export default Services;