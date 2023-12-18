import React from 'react';
import {Input} from 'antd';
import clsx from 'clsx';
import styles from "./styles.module.scss";

const AntInput = (props) => {
  const {
    label,
    type,
    star,
    star2,
    value,
    onChange,
    className
  } = props;

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
          <Input
            type={type}
            id="inputField"
            value={value}
            onChange={onChange}
            size="large"
            className={emptyInput}
            required
          />
          <label htmlFor="inputField" className={styles.labeltex}>{label}</label>
        </div>
      </div>
    </div>
  )
}

export default AntInput;




