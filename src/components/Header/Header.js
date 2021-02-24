import React from 'react';
import style from './header.module.css';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

function Headers(){
   return(
      <div className={style.header}>
         <div className={style.headerInfo}>
            <h1>web development and website promotions</h1>
            <Typed
               className={style.typedText}
               strings={['Web Design','Web Development','Facebook Ads','Google Ads']}
               typeSpeed={70}
               backSpeed={30}
               loop
            />
            <div className={style.containerContact}>
               <a href="#" className={style.btnContact}>Contact me</a>
            </div>
         </div>

         <Particles
            params={{
               particles : {
                  number : {
                     value : 30,
                     density : {
                        enable : true,
                        value_area : 900
                     }
                  },
                  shape : {
                     type : 'square',
                     stroke : {
                        width : 6,
                        color : '#f9ab00'
                     }
                  }
               }
            }}
            className={style.particle}
         />
      </div>
   )
}

export default Headers;