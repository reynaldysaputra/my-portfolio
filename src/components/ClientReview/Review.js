import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import style from './review.module.css';
import './carouselModif.css';

function Review(){
   return(
      <div className={style.reviewContainer}>
         <h2>MY HAPPY CLIENTS</h2>
         <div className={style.boxContainer}>
            <div className={style.boxReview}>
               <Carousel autoPlay infiniteLoop  emulateTouch>
                  <div className={style.review}>
                     <img src='https://www.csircmc.res.in/sites/default/files/default_images/default_man_photo.jpg'/>
                     <h3>Jane Doe</h3>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, consectetur. Possimus minus ipsam, similique voluptatem eligendi laudantium non odio quidem?</p>
                  </div>
                  <div className={style.review}>
                     <img src='https://www.csircmc.res.in/sites/default/files/default_images/default_man_photo.jpg'/>
                     <h3>Truits</h3>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi enim inventore ipsum quos excepturi voluptatem.</p>
                  </div>
                  <div className={style.review}>
                     <img src='https://www.csircmc.res.in/sites/default/files/default_images/default_man_photo.jpg'/>
                     <h3>Truits</h3>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi enim inventore ipsum quos excepturi voluptatem.</p>
                  </div>
               </Carousel>
            </div>
         </div>
      </div>
   )
}

export default Review;