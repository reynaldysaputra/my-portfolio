import React, {useState} from 'react';
import { Col, Image } from 'react-bootstrap';
import style from './portfolio.module.css';
import img1 from '../../assets/img/1.png';
import { Modal } from 'react-responsive-modal';

function ItemPortfolio(){
   const [open, setOpen] = useState(false);

   const onOpenModal = () => setOpen(true);
   const onCloseModal = () => setOpen(false);

   return(
      <Col xs md={4} lg={3}>
         <div className={style.itemPortfolio}>
            <Image src={img1} className={style.imgThumb} onClick={onOpenModal} />
            <Modal open={open} onClose={onCloseModal} center>
               <h2>Simple centered modal</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                  hendrerit risus, sed porttitor quam.
               </p>
            </Modal>
         </div>
      </Col>
   )
}

export default ItemPortfolio;