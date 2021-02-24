import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import style from './about.module.css';
import me from '../../assets/img/me.jpg';
import Layout from '../Layout/Layout';

function AboutMe(){
   return(
      <Layout>
         <Row className={style.aboutContainer}>
            <Col lg={6} className='d-flex justify-content-center align-items-center'>
               <Image src={me} alt='Andrew' className={style.me} />
            </Col>
            <Col lg={6} className={`${style.containerBox2}`}>
               <div>
                  <h1 className={style.titleAbout}>about me</h1>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate, optio rem amet quidem, non fugit, commodi iure eaque libero itaque reprehenderit quia eos cum dignissimos necessitatibus iste adipisci debitis. Quisquam at veritatis quam vel, ducimus natus ipsum tempore molestias, praesentium, fuga sunt unde cumque! Sequi accusantium voluptas esse. Fuga aspernatur dolorem nemo amet mollitia velit magni dicta sint totam eos cumque aliquid neque autem magnam deserunt, consequatur in! In minima tenetur at cum, maiores possimus sit aliquid iure debitis.</p>
               </div>
            </Col>
         </Row>  
      </Layout>
   )
}

export default AboutMe;