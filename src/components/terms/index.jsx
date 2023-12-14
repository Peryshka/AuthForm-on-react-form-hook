import React from 'react';
import styles from './styles.module.scss';

const Terms = (props) => {
  const {
    text,
    link
  } = props;
  return(
    <div className={styles.terms}>
     <input
       type="checkbox"
      className={styles.checkbox}
     />
      <p className={styles.text}>{text}<a href="#" className={styles.link}>{link}</a></p>
    </div>
  )
}

export default Terms;