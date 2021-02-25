import React, {useState} from 'react';
import { Col, Image } from 'react-bootstrap';
import style from './portfolio.module.css';
import img1 from '../../assets/img/1.png';
import Popup from 'reactjs-popup';

function ItemPortfolio(props){
   const {imgModal, header ,link, text} = props.data.data;

   console.log(imgModal);

   return(
      <Col xs={12} lg={3} className='mb-md-4'>
         <div className={style.itemPortfolio}>
            <Popup
               trigger={<Image src={imgModal} className={style.imgThumb} />}
               modal
            >
               {close => (
                  <main>
                     <section className={style.header}>
                        <h3>{header}</h3>
                        <div className={style.closeModal} onClick={close}>X</div>
                     </section>
                     <section className={style.body}>
                        <Image src={imgModal} />
                        <h4>{text}</h4>
                        <strong>GitHub : <a href="#">{link}</a></strong>
                     </section>
                  </main>
               )}               
            </Popup>
         </div>
      </Col>
   )
}

export default ItemPortfolio;