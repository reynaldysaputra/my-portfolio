import React from 'react';
import style from './contact.module.css';

function TextArea({placeholder,names,register,errors,errorText, ...props}){
   return(
      <div className={`${style.inputData} ${style.textAreaStyle}`}>
         <textarea 
            placeholder={placeholder} 
            className={style.inputForm} 
            name={names} 
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

export default TextArea;