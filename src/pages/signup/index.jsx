import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import Titlepart from "../../components/title-part";
import logoImg from '../../assets/icons/Logo 1.png';
import googleImg from '../../assets/img/Continue with Google.png';
import Input from '../../components/input';
import Terms from "../../components/terms";
import Button from '../../components/button';
import LinkBlock from "../../components/link-block";
import hiddenImg from '../../assets/icons/closedEye.png';
import openEye from "../../assets/icons/eyeOpen.png";
import AntInput from "../../components/ant-input";
import {Controller, useForm} from "react-hook-form";

const Signup = () => {
  const [password, setPassword] = useState('');
  const [passwordSecond, setPasswordSecond] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setSecondShowPassword] = useState(false);
  const [chek, setChek] = useState(false)

  const {
    handleSubmit,
    control,
    formState: {errors},
    watch,
    getValues,
    setError,
    setValue,
    clearErrors,
  } = useForm({mode: 'onBlur'});


  const password2 = watch('password', ''); // 'password' - имя поля для отслеживания, '' - значение по умолчанию
  const confirmPassword = watch('confirmPassword', '');
  const handleTypeChange = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
    setValue('myCheckbox', chek); // Предполагается, что у вас есть функция setValue из React Hook Form
  }, [chek]);

  const handleChangeIcon = () => {
    setShowPassword(!showPassword);
  }

  const handleChangeSecondIcon = () => {
    setSecondShowPassword(!showSecondPassword);
  }

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className={styles.formWrap}>
      <Titlepart
        img={logoImg}
        title="Create an Account"
        subtitle="Sign up now to get started with an account."
        googleImg={googleImg}
      />
      <form onSubmit={handleSubmit(onSubmit)}>

        <Controller
          name="fullName"
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <AntInput
              {...field}
              label="Full Name"
              star="*"
              type="text"
              className={errors.fullName ? styles.emptyInput : ''}
            />)}
        />

        {errors.fullName && <p className={styles.errorText}>Full Name is a required field!</p>}

        <Controller
          name="emailAddress"
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <AntInput
              {...field}
              label="Email Address"
              star2="*"
              type="email"
              className={errors.emailAddress ? styles.emptyInput : ''}
            />)}
        />

        {errors.emailAddress && <p className={styles.errorText}>Email Address is a required field!</p>}

        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password is a required field!',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              message: 'Invalid password format',
            },
          }}
          render={({field}) => (<Input
            {...field}
            label1="Password"
            star="*"
            type={showPassword ? 'text' : 'password'}
            onClick={handleChangeIcon}
            hidden={showPassword ? openEye : hiddenImg}
            className={errors.password ? styles.emptyInput : ''}
          />)}
        />

        {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}

        <Controller
          name="confirmPassword"
          control={control}
          rules={{required: 'Confirm Password is a required field!',}}
          render={({field, fieldState}) => (
            <Input
              {...field}
              label1="Confirm Password"
              onClick={handleChangeSecondIcon}
              star2="*"
              type={showSecondPassword ? 'text' : 'password'}
              hidden={showSecondPassword ? openEye : hiddenImg}
              className={errors.confirmPassword || errors.confirmPassword !== errors.password ? styles.emptyInput : ''}
              onChange={(e) => {
                {
                  const value = e.target.value;
                  if (value === '') {
                    setError('confirmPassword', {
                      type: 'manual',
                      message: 'Confirm Password is a required field!',
                    })
                  } else if (value !== password2) {
                    setError('confirmPassword', {
                      type: 'manual',
                      message: 'Passwords mismatch!',
                    });
                  } else if (value === password2) {
                    clearErrors('confirmPassword')
                  } else {
                    clearErrors('confirmPassword')
                  }

                  field.onChange(value)
                }
              }}
            />)}
        />

        {/*{<p className={styles.errorText}>{errors.confirmPassword?.message}</p>}*/}
        {errors.confirmPassword && <p className={styles.errorText}>{errors.confirmPassword.message}</p>}

        <Controller
          name="myCheckbox"
          control={control}
          defaultValue={chek} // Установите начальное значение как false
          render={({field}) =>
            (
              <Terms
                text="I have read and agree to the"
                link="Terms of Service"
                {...field}
                setChek={setChek}
                chek={chek}
              />
            )}
        />
        <Button
          children="Get Started"
        />
      </form>
      <LinkBlock
        text="Already have an account?"
        link="Log in"
        linkAddress="/sign-in"
      />

    </div>
  )
}

export default Signup;

