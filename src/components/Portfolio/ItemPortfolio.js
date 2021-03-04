import React, {useState} from 'react';
import { Col, Image } from 'react-bootstrap';
import style from './portfolio.module.css';
import Popup from 'reactjs-popup';

function ItemPortfolio(props){
   const {imgModal, header ,link, text} = props.data.data;

   return(
      <Col xs={12} lg={3} className='mb-md-4'>
         <div className={style.itemPortfolio}>
            <Popup
               trigger={<Image src={props.data.img} className={style.imgThumb} />}
               modal
               lockScroll
            >
               {close => (
                  <main>
                     <section className={style.header}>
                        <h2>{header}</h2>
                        <div className={style.closeModal} onClick={close}>X</div>
                     </section>
                     <section className={style.body}>
                        {imgModal.map((item,index) => (
                           <div style={{textAlign:'center'}}>
                              <Image src={item} key={index} />
                           </div>
                        ))}
                        <h4>{text}</h4>
                        <strong>GitHub : {link}</strong>
                     </section>
                  </main>
               )}               
            </Popup>
         </div>
      </Col>
   )
}

export default ItemPortfolio;