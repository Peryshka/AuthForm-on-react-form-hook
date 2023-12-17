import React, {useEffect} from 'react';
import {useState} from 'react';
import styles from "./styles.module.scss";
import Titlepart from "../../components/title-part";
import logoImg from "../../assets/icons/Logo 1.png";
import googleImg2 from "../../assets/img/Continue with Google (1).png";
import Input from "../../components/input";
import Terms from "../../components/terms";
import Button from "../../components/button";
import LinkBlock from "../../components/link-block";
import hiddenImg from '../../assets/icons/closedEye.png';
import openEye from '../../assets/icons/eyeOpen.png';
import AntInput from "../../components/ant-input";
import {useForm, Controller} from "react-hook-form";
import clsx from 'clsx';


const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [chek, setChek] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: {errors}
  } = useForm();
  const handleTypeChange = (e) => {
    setPassword(e.target.value);
  }
  const handleChangeIcon = () => {
    setShowPassword(!showPassword);
  }

  const onSubmit = (data) => {
    console.log(data);
  }

  useEffect(() => {
    setValue('myCheckbox', chek); // Предполагается, что у вас есть функция setValue из React Hook Form
  }, [chek]);

  return (
    <div className={styles.formWrap}>
      <Titlepart
        img={logoImg}
        title="Log in to your Account"
        subtitle="Welcome back, please enter your details."
        googleImg={googleImg2}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="emailAddress"
          control={control}
          rules={{required: true}}
          render={({field}) => (<AntInput
            {...field}
            label="Email Address"
            type="email"
            className={errors.emailAddress ? styles.emptyInput : ''}
          />)}
        />

        {errors.emailAddress && <p className={styles.errorText}>Email Address is a required field!</p>}

        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password is a required field',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              message: 'Invalid password format',
            },
          }}
          render={({field}) => (<Input
            {...field}
            label1="Password"
            type={showPassword ? 'text' : 'password'}
            onClick={handleChangeIcon}
            hidden={showPassword ? openEye : hiddenImg}
            className={errors.password ? styles.emptyInput : ''}
          />)}
        />

        {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}

        <Controller
          name="myCheckbox"
          control={control}
          defaultValue={chek} // Установите начальное значение как false
          rules={{required: false}}
          render={({field}) =>
            (
              <Terms
                text="Remember me"
                {...field}
                setChek={setChek}
                chek={chek}
                className={clsx()}
              />
            )}
        />

        <Button
          children="Log in"
        />
      </form>
      <LinkBlock
        text="Don’t have an account?"
        link="Sign Up"
        linkAddress="/sign-up"
      />
    </div>
  )
}


export default Login;

