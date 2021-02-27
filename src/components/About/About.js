import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import style from './about.module.css';
import me from '../../assets/img/me.jpg';
import Layout from '../Layout/Layout';

function AboutMe(){
   return(
      <Layout>
         <Row className={style.aboutContainer} id='aboutMe'>
            <Col lg={6} className='d-flex justify-content-center align-items-center'>
               <Image src={me} alt='Andrew' className={style.me} />
            </Col>
            <Col lg={6} className={`${style.containerBox2}`}>
               <div>
                  <h1 className={style.titleAbout}>about me</h1>

                  <p>Hi, My name is Reynaldy Saputra I'm a Front End Developer with +1 year experience in the real world, Specialist in building the website you want, and I use React js to keep up with the latest trends to ensure quality work. I am here to provide world class quality for your satisfaction.</p>
                  <p>My work experience in the tech and startup industry has helped me to be careful in carrying out any task. That's why I'm used to working remotely with minimal supervision but with maximum results. I am an expert in creating a website. I feel comfortable meeting new people and like the challenge of learning something new and developing my skills. I am easy to communicate with, understand technology, and hardworking. I don't shy away from responsibilities and I believe that I am the right person for the job.</p>
                  <p>If you're interested in collaborating or want me to join your amazing company, feel free to contact me.</p>
               </div>
            </Col>
         </Row>  
      </Layout>
   )
}

export default AboutMe;