import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import style from './contact.module.css';
import {Row, Col} from 'react-bootstrap';
import Input from './input';
import TextArea from './textArea';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';

function Contact(){
   const {register, handleSubmit,errors} = useForm();
   const [loading, setLoading] = useState(false);
   const [succses, setSuccses] = useState(false);

   function sendEmail(data, elementHTML) {
      setLoading(true);

      emailjs.sendForm('service_t23a3ya', 'template_1z7r7l7', elementHTML.target, 'user_zNwxAlimxfxdXpqiSFylv')
         .then((result) => {
            console.log(result);
            setLoading(false);
            setSuccses(true);
            elementHTML.target.reset();
         }, (error) => {
            console.log(error.text);
         })
   }

   return(
      <div className={style.containerContact}>
         <Layout>
            <Row>
               <Col xs={12} className={style.containerText}>
                  <h2>CONTACT ME</h2>
                  <span>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</span>
                  {succses && <p>Form sent successfully! i'll contact you as soon as possible</p>}
               </Col>
               <Col xs={12} className={style.containerForm}>
                  <form onSubmit={handleSubmit(sendEmail)}>
                     <Row className='justify-content-center'> 
                        <Col xs={12} md={5}>
                              <Input 
                                 type='text' 
                                 placeholders='Name' 
                                 names='name' 
                                 register={register}
                                 errorText='Please enter your name'
                                 errors={errors.name}
                              />
                              <Input 
                                 type='text' 
                                 placeholders='Phone Number' 
                                 names='phone' 
                                 register={register}
                                 errorText='Please add you phone number'
                                 errors={errors.phone}
                              />
                              <Input 
                                 type='email'
                                 placeholders='Email' 
                                 names='email' 
                                 register={register}
                                 errorText='Please provide you email'
                                 errors={errors.email}
                              />
                              <Input 
                                 type='text' 
                                 placeholders='Subject' 
                                 names='subject' 
                                 register={register}
                                 errorText='OOPS, you forget to add the subject'
                                 errors={errors.subject}
                              />
                        </Col>
                        <Col xs={12} md={5} >
                           <TextArea 
                              placeholder='please describe shortly you project...' 
                              names='message'
                              register={register}
                              errorText='Please describe shortly your project needs..'
                              errors={errors.message}
                           />
                        </Col>
                     </Row>
                     <Row className='justify-content-center'>
                        <Col xs={12} md={5} className='d-sm-none d-md-block'></Col>
                        <Col xs={12} md={5}>
                           <button type='submit' className={style.button}>{loading ? 'LOADING...' : 'SEND'}</button>
                        </Col>
                     </Row>
                  </form>
               </Col>
            </Row>
         </Layout>
      </div>
   )
}

export default Contact;