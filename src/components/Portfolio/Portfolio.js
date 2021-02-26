import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { resourcePorfolio } from '../../assets/resource/portfolio';
import Layout from '../Layout/Layout';
import ItemPortfolio from './ItemPortfolio';
import style from './portfolio.module.css';
import './modalModif.css';

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
                  {resourcePorfolio.map(item => (
                     <ItemPortfolio data={item} key={item.id} />
                  ))}
            </Row>
         </Layout>
      </div>
   )
}

export default Portfolio;