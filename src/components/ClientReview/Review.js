import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import client1 from '../../assets/img/clien1.jpeg';
import client2 from '../../assets/img/client2.jpg';
import client3 from '../../assets/img/client3.jpg';
import style from './review.module.css';
import './carouselModif.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Review(){
   return(
      <div className={style.reviewContainer}>
         <h2>MY HAPPY CLIENTS</h2>
         <div className={style.boxContainer}>
            <div className={style.boxReview}>
               <Carousel autoPlay infiniteLoop  emulateTouch>
                  <div className={style.review}>
                     <img src={client1} alt='client'/>
                     <h3>Padwad</h3>
                     <p>Reynaldy is very good at creating a web interface. Very good job, I am very happy with this result. Good work!</p>
                  </div>
                  <div className={style.review}>
                     <img src={client2} alt='client'/>
                     <h3>Truits</h3>
                     <p>He set an example for me. I will analyze how to use it. And I will attach it to my project, he does his best. Thank you!</p>
                  </div>
                  <div className={style.review}>
                     <img src={client3} alt='client'/>
                     <h3>John D.</h3>
                     <p>Reynaldy helped me solve website problems, he's a very thorough and creative person. Good work :)</p>
                  </div>
               </Carousel>
            </div>
         </div>
      </div>
   )
}

export default Review;