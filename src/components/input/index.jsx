import React from 'react';
import styles from './styles.module.scss';
import clsx from "clsx";



const Input = (props) => {
  const {
    label,
    type,
    star,
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
    {'emptyInput' : emptyField}
  )

  return (
    <div className={styles.inputWrap}>
      <label className={styles.label}>
        <div className={styles.labelText}>
          <span className={styles.labeltex}>{label}</span>
          <span className={styles.star}>{star}</span>
        </div>
        {condition && (
          <div>
            <img src={hidden} alt="hidden" className={styles.hidden} onClick={onClick} />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={emptyInput}
        >
        </input>
      </label>
    </div>
  )
}

export default Input;