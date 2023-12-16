import React from 'react';
import styles from './styles.module.scss';

const Titlepart = (props) => {
  const {
    img,
    title,
    subtitle,
    googleImg
  } = props;
  return (
    <div className={styles.titleWrap}>
      <img src={img} alt="logo" className={styles.logoImg}/>
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.subtitle}>
        {subtitle}
      </p>
      <img src={googleImg} alt="google-image" className={styles.googleImg}/>
      <div className={styles.orWrap}>
        <span className={styles.line}></span>
        <span>OR</span>
        <span className={styles.line2}></span>
      </div>
    </div>
  )
}

export default Titlepart;

