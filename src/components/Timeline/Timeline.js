import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Layout from '../Layout/Layout';
import style from './timeline.module.css';

function Timeline(){
   return(
      <Layout>
         <Row className={style.timelineContainer}>
            <div className={style.line}></div>
            <Col className={style.timelineItemOdd} xs={12}>
               <div className={style.timelineOdd}>
                  <h2>2014-2015</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae accusantium, voluptates, maxime iste praesentium tempore maiores corrupti reiciendis eius ratione ipsa. Laudantium accusamus sed obcaecati impedit, magnam omnis recusandae optio?</p>
               </div>
            </Col>
            <Col className={style.timelineItemEven} xs={12}>
               <div className={style.timelineEven}>
                  <h2>2015-2016</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe provident dolore earum commodi, voluptatum voluptate tempore laboriosam unde ab deleniti eum doloremque ut molestiae quaerat ipsum? Eum deleniti corrupti ratione eius odit libero rem?</p>
               </div>
            </Col>
            <Col className={style.timelineItemOdd} xs={12}>
               <div className={style.timelineOdd}>
                  <h2>2017-2019</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum facilis incidunt quasi! Autem reprehenderit veniam quidem rerum repellat iste impedit sapiente illum, quod ex!</p>
               </div>
            </Col>
            <Col className={style.timelineItemEven} xs={12}>
               <div className={style.timelineEven}>
                  <h2>2019-2021</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quam in, cupiditate cumque, veritatis quas quisquam minus laboriosam reiciendis non distinctio iure consequatur!</p>
               </div>
            </Col>
         </Row>
      </Layout>
   )
}

export default Timeline;
