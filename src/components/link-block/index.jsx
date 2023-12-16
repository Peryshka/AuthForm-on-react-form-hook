import React from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';

const LinkBlock = (props) => {
  const {
    text,
    link,
    linkAddress
  } = props;
  return (
    <div className={styles.linkWrap}>
      <span>{text}</span>
      <Link to={linkAddress} className={styles.link}>{link}</Link>
    </div>
  )
}

export default LinkBlock;

