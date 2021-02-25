import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Layout from '../Layout/Layout';
import ItemPortfolio from './ItemPortfolio';
import style from './portfolio.module.css';

function Portfolio(){
   return(
      <div className={style.containerPortfolio}>
         <Layout>
            <Row className={style.containerPortfolioItem}>
               <Col xs={12}>
                  <div className={style.textContainer}>
                     <h2>PORTFOLIO</h2>
                  </div>
               </Col>
               <ItemPortfolio/>
               <ItemPortfolio/>
               <ItemPortfolio/>
               <ItemPortfolio/>
            </Row>
         </Layout>
      </div>
   )
}

export default Portfolio;