import React from 'react';
import styles from './styles.module.scss';

const Button = ({children}) => {
  return (
    <div className={styles.btnWrap}>
      <button className={styles.btn}>
        {children}
      </button>
    </div>
  )
}

export default Button;

