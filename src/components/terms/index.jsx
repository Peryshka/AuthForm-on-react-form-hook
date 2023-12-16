import React from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';

const Terms = (props) => {
  const {
    text,
    link,
    value,
    setChek,
    chek
  } = props;
  return(
    <div className={styles.terms} onClick={() => !value}>
     <input
       type="checkbox"
       onChange={event => setChek(!chek)}
      className={styles.checkbox}
     />
      <p className={styles.text}>{text}<Link to="/" className={styles.link}>{link}</Link></p>
    </div>
  )
}

export default Terms;