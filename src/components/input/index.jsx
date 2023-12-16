import React from 'react';
import styles from './styles.module.scss';
import clsx from "clsx";

const Input = (props) => {
   const {
     label1,
     type,
     star,
     star2,
     hidden,
    onClick,
    value,
     onChange,
     className
   } = props;
   const condition = type === 'password' || type === 'text';
   const emptyField = value === '';
   const emptyInput = clsx(
     styles.input,
     className,
     {'emptyInput': emptyField}
   )

  return (
    <div className={styles.inputWrap}>
      <div className={styles.label}>
         <div className={styles.form}>
           <span className={styles.star}>{star}</span>
           <span className={styles.star2}>{star2}</span>
           <input
             id="password"
             type={type}
             value={value}
             onChange={onChange}
             className={emptyInput}
             required
           />
           <label className={styles.labeltex} htmlFor="password">{label1}</label>
           {condition && (
             <div>
               <img src={hidden} alt="hidden" className={styles.hidden} onClick={onClick}/>
             </div>
           )}
         </div>
        </div>
    </div>
  )
}

export default Input;

