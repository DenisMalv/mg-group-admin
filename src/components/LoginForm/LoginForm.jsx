import { useState } from 'react';
import './LoginForm.scss'

import FormInput from 'components/FormInput/FormInput';
import FormCheckbox from 'components/FormCheckbox/FormCheckbox';
import MainButton from 'components/MainButton/MainButton';
import LoginSocial from 'components/LoginSocial/LoginSocial';

import iconCheck from '../../img/icons/Check.svg'
import Icon from 'components/Icons/IconSprite';

// import { useLoginQuery } from 'redux/auth/loginAPI';
import { useLoginMutation } from 'redux/auth/authAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isUser } from 'redux/user/userSlice';

const LoginForm = ({title}) => {
  // const {data=[], isLoading} = useLoginQuery()
  const [login, {isError,isLoading,isSuccess} ] = useLoginMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step,setStep] = useState(1)
  const [datta,setDatta] = useState({
    email:'',
    password:'',
    checked:false,
  })
  const [error, setError]=useState({
    email:false,
    password:false,
  })


  const handleInput = (e,name)=>{
    console.dir(e.target)
    if(e.target.value !== ''){
        setError({...error,[name]:false})
    }

    setDatta({
      ...datta,[name]:e.target.value
    })
  }

  const handleChecked = (e,name)=>{
    setDatta({
      ...datta,[name]:e.target.checked
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(datta.email === ''){
      setError({...error, email:true})
    }
    if(datta.password === ''){
      setError({...error, password:true})
      return
    }
  }

  const handleLogin = async (e)=>{
    try {
      e.preventDefault();

      if(datta.email === ''){
        setError({...error, email:true})
      }
      if(datta.password === ''){
        setError({...error, password:true})
        return
      }
  
      const userData = {
        email:datta.email,
        password:datta.password
      }
  
       const res = await login(userData).unwrap();
       if (res.user) {
        await dispatch(isUser(res));
        navigate('/dashboard');
      }
      
    } catch (error) {
      isError(error);
    }
   
  }


  return (
    <div className='form-container bg-card br-24'>
      {isSuccess && <h1>SUCCESS API</h1>}
      {isError && <h1>ERROR API</h1>}
      {isLoading && <h1>LOADING... </h1>}
      {step===1 &&
        <form className='form-login' action="" onSubmit={handleLogin}>
          <h3 className='form-title'>{title}</h3>

          <FormInput title='Email' name='email' type='email'  classList="mb-16" value={datta.email} handleInput={handleInput} error={error} errorMessage='Перевірте  коректність введення email'/>

          <FormInput title="Пароль" name='password' type='password'  classList="mb-16" value={datta.password} handleInput={handleInput} error={error} errorMessage=''/>

          <FormCheckbox title="Запамʼятати пароль" classList='mb-24'  name="checked" checked={datta.checked} handleChecked={handleChecked} />

          <MainButton title='Увійти' type='submit' classList='mb-16' data={datta} />

          <LoginSocial  />

          <p className='form-forgot-descr'>Забули пароль? <span className='form-forgot-link' onClick={()=>setStep(2)}>Відновити</span> </p>
        </form>
      }

      {step === 2 &&
        <form className='form-login' action="" onSubmit={handleSubmit}>
          <h3 className='form-title mb-32'>Відновлення паролю</h3>
          <p className='mb-32'>Вкажіть ваш email, щоб підвердити вашу особу</p>

          <FormInput title='Email' name='email' type='email' classList="mb-24" value={datta.email} handleInput={handleInput} error={error} errorMessage='Перевірте  коректність введення email'/>

          <MainButton title='Відновити' type='submit' classList='mb-16' data={datta} />

          <p className='form-forgot-descr'>Згадали пароль? <span className='form-forgot-link' onClick={()=>setStep(1)}>Увійти</span> </p>
        </form>
      }

      {step === 3 && 
        <form className='form-login' action="" onSubmit={handleSubmit}>
          <h3 className='form-title mb-32'>Відновлення паролю</h3>


          <FormInput title="Новий пароль" name='password' type='text' classList="mb-16" value={datta.password} handleInput={handleInput} error={error} errorMessage=''/>
          <FormInput title="Підтвердити пароль" name='password' type='text' classList="mb-32" value={datta.password} handleInput={handleInput} error={error} errorMessage='' restore/>

          <MainButton title='Увійти' type='submit' classList='' data={datta} />

        </form>
      }

      {step === 4 && 
        <div className='step-four'>
          <Icon classlist={`step-four-icon-close`} id={`login-restore-close`} name="close" stroke="#fff" width="24" height="24" onClick={()=>setStep(1)}/>

          <h3 className=''>Вітаю!</h3>
          <h3 className='mb-32'>Пароль успішно відновлено</h3>
          <img src={iconCheck} alt="icon-check" />
        </div>
      }

    </div>
  );
};

export default LoginForm;





