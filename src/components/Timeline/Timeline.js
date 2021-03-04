import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Layout from '../Layout/Layout';
import style from './timeline.module.css';

function Timeline(){
   return(
      <Layout>
         <Row className={style.timelineContainer} id='work'>
            <div className={style.line}></div>
            <Col className={style.timelineItemEven} xs={12}>
               <div className={style.timelineEven}>
                  <h2>Senior High School / SMK Ad-da'wah Jakarta</h2>
                  <p>Department of Computer. Start learning about the world of computers by assembling computers, learning programming languages, etc. Take a little step further to become the best.</p>
               </div>
            </Col>
            <Col className={style.timelineItemOdd} xs={12}>
               <div className={style.timelineOdd}>
                  <h2>Junior High School / SMP Ad-da'wah Jakarta</h2>
                  <p>I started to know and love the field of computers, started a lot of challenging things in the present, and took steps for future decisions.</p>
               </div>
            </Col>
            <Col className={style.timelineItemEven} xs={12}>
               <div className={style.timelineEven}>
                  <h2>Elementary School / SDN 1 Duri Kosambi</h2>
                  <p>SDN Duri kosambi 1 is the first formal school that I attended. Many achievements were obtained and many experiences gained.</p>
               </div>
            </Col>
         </Row>
      </Layout>
   )
}

export default Timeline;
