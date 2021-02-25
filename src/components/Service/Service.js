import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import style from './service.module.css';
import Layout from '../Layout/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDesktop, faFileCode, faCompressAlt, faObjectGroup} from '@fortawesome/free-solid-svg-icons';

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

                     <h3>Web Design</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae?</p>
                  </div>
               </Col>
               <Col md={6} lg={3}>
                  <div className={style.boxService}>
                     <div className={style.iconBox}>
                        <FontAwesomeIcon icon={faFileCode}/>
                     </div>
                     <h3>Web Development</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae?</p>
                  </div>
               </Col>
               <Col md={6} lg={3}>
                  <div className={style.boxService}>
                     <div className={style.iconBox}>
                        <FontAwesomeIcon icon={faCompressAlt}/>
                     </div>
                     <h3>Facebook Ads</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae?</p>
                  </div>
               </Col>
               <Col md={6} lg={3}>
                  <div className={style.boxService}>
                     <div className={style.iconBox}>
                        <FontAwesomeIcon icon={faObjectGroup}/>
                     </div>
                     <h3>Google Ads</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae?</p>
                  </div>
               </Col>
            </Row>
         </Layout>
      </div>
   )
}

export default Services;