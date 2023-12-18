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
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const Signup2 = () => {
  const [password, setPassword] = useState('');
  const [passwordSecond, setPasswordSecond] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setSecondShowPassword] = useState(false);
  const [chek, setChek] = useState(false)

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('поле full name обязательное для заполнения')
      .matches(/[a-zA-Z]{3,30}/, "символы допускаются от (A-Z) (a-z)"),
    emailAddress: yup.string()
      .email()
      .required('поле email обязательное для заполнения')
      .matches(/[^а-я]+@[^а-я]+\.[^а-я\._'+;*^&=?~{}\-\.\/,\\]+$/,
        'email невалидный'),
    password: yup
      .string()
      .required('поле password обязательное для заполнения')
      .min(8, 'пароль должен состоять из 8 символов')
      .oneOf([yup.ref('password'), null])
      .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Пароль должен состоять из букв и цифр "),
    confirmPassword: yup.string()
      .required('поле confirm обязательное для заполнения')
      .oneOf([yup.ref('password')],
        'Пароли должны совпадать!')
  });

  const formMethods = useForm(
    {
      defaultValues: {},
      resolver: yupResolver(schema),
      mode: 'onBlur'
    }
  );
  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
    watch
  } = formMethods

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
    if (data.password === data.confirmPassword) {
      console.log(data);
    }
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
          render={({field}) => (
            <AntInput
              {...field}
              label="Full Name"
              star="*"
              type="text"
              className={errors.fullName ? styles.emptyInput : ''}
            />)}
        />

        {errors.fullName && <p className={styles.errorText}>{errors.fullName.message}</p>}

        <Controller
          name="emailAddress"
          control={control}
          render={({field}) => (
            <AntInput
              {...field}
              label="Email Address"
              star2="*"
              type="email"
              className={errors.emailAddress ? styles.emptyInput : ''}
            />)}
        />

        {errors.emailAddress && <p className={styles.errorText}>{errors.emailAddress.message}</p>}
        {/*Проверка на ввод символов в поле пароль.Пожалуйста введите в крайнем случае 1 букву 1 символ @$% и 1 цифру*/}
        <Controller
          name="password"
          control={control}
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
                  field.onChange(value)
                }
              }}
            />)}
        />

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

export default Signup2;




