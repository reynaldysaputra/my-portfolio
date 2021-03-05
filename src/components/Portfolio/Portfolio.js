import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { resourcePorfolio } from '../../assets/resource/portfolio';
import Layout from '../Layout/Layout';
import ItemPortfolio from './ItemPortfolio';
import style from './portfolio.module.css';
import Marquee from 'react-marquee-slider';
import times from "lodash/times";
import html from '../../assets/img/skill/html.png';
import javascript from '../../assets/img/skill/js.png';
import css from '../../assets/img/skill/css.png';
import react from '../../assets/img/skill/react.png';
import sass from '../../assets/img/skill/sass.png';
import github from '../../assets/img/skill/github.png';
import materialui from '../../assets/img/skill/materialui.png';
import reactboostrap from '../../assets/img/skill/reactboostrap.png';
import redux from '../../assets/img/skill/redux.png';
import './modalModif.css';

const photos = [
   css,
   html,
   javascript,
   react,
   sass,
   github,
   materialui,
   reactboostrap,
   redux
];

function Portfolio(){
   return(
      <div className={style.containerPortfolio} id='portfolio'>
         <Layout>
            <Row className={style.containerText}>
               <Col xs={12}>
                  <div className={style.textContainer}>
                     <h2>PORTFOLIO & EXPERTISE</h2>
                  </div>
               </Col>
            </Row>
            <Row className={style.containerPortfolioItem}>
                  {resourcePorfolio.map(item => (
                     <ItemPortfolio data={item} key={item.id} />
                  ))}
            </Row>
         </Layout>
         <Row>
            <Col xs={12}>
               <div className={style.textContainer}>
                  <Marquee key={1} velocity={10}>
                     {times(9, Number).map((id,index) => (
                        <img
                           key={index}
                           src={photos[id]}
                           className={style.imgSkill}
                           style={{ 
                           marginLeft: "7px",
                           marginRight: "80px",
                           }}
                           alt={photos[id]}
                        />
                     ))}
                  </Marquee>
               </div>
            </Col>
         </Row>
      </div>
   )
}

export default Portfolio;