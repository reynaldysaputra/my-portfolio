import React from 'react';
import style from './contact.module.css';

function Input({type,placeholders,names,register,errors,errorText, ...props}){
   return(
      <div className={style.inputData}>
         <input 
            type={type} 
            placeholder={placeholders} 
            name={names}
            className={style.inputForm} 
            ref={register({
               required : errorText
            })}
            {...props}
         />
         <div className={style.line}></div>
         {errors && <span className={style.err}>{errors.message}</span>}
      </div>
   )
}

export default Input