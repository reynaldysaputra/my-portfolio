import React from 'react';
import { Col, Image } from 'react-bootstrap';
import style from './portfolio.module.css';
import Popup from 'reactjs-popup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function ItemPortfolio(props){
   const {imgModal, header , link1 , link2 ,text} = props.data.data;

   return(
      <Col xs={12} lg={3} className='mb-md-4'>
         <div className={style.itemPortfolio}>
            <Image src={props.data.img} className={style.imgThumb} />
            <Popup
               trigger={
                  <div className={style.modalImg}>
                     <div className={style.bgTransparent}></div>
                     <FontAwesomeIcon icon={faSearch} className={style.iconSearch}/>
                  </div>
               }
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
                        <strong>GitHub : <span style={{wordBreak:'break-all'}}>{link1}</span></strong>
                        <strong>Website : {link2}</strong>
                     </section>
                  </main>
               )}               
            </Popup>
         </div>
      </Col>
   )
}

export default ItemPortfolio;