import { useState } from 'react';
import './LoginForm.scss'

import FormInput from 'components/FormInput/FormInput';
import FormCheckbox from 'components/FormCheckbox/FormCheckbox';
import MainButton from 'components/MainButton/MainButton';
import LoginSocial from 'components/LoginSocial/LoginSocial';

import iconCheck from '../../img/icons/Check.svg'
import Icon from 'components/Icons/IconSprite';

const LoginForm = ({title}) => {
  const [step,setStep] = useState(1)
  const [data,setData] = useState({
    email:'',
    password:'',
    checked:false,
  })
  const [error, setError]=useState({
    email:false,
    password:false,
  })

  const handleInput = (e,name)=>{
    console.log(e.target.value)
    if(e.target.value !== ''){
        setError({...error,[name]:false})
    }

    setData({
      ...data,[name]:e.target.value
    })
  }

  const handleChecked = (e,name)=>{
    setData({
      ...data,[name]:e.target.checked
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(data.email === ''){
      setError({...error, email:true})
    }
    if(data.password === ''){
      setError({...error, password:true})
      return
    }
  }


  return (
    <div className='form-container bg-card br-24'>
      {step===1 &&
        <form className='form-login' action="" onSubmit={handleSubmit}>
          <h3 className='form-title'>{title}</h3>

          <FormInput title='Email' name='email' type='email'  classList="mb-16" value={data.email} handleInput={handleInput} error={error} errorMessage='Перевірте  коректність введення email'/>

          <FormInput title="Пароль" name='password' type='password'  classList="mb-16" value={data.password} handleInput={handleInput} error={error} errorMessage=''/>

          <FormCheckbox title="Запамʼятати пароль" classList='mb-24'  name="checked" checked={data.checked} handleChecked={handleChecked} />

          <MainButton title='Увійти' type='submit' classList='mb-16' data={data} />

          <LoginSocial  />

          <p className='form-forgot-descr'>Забули пароль? <span className='form-forgot-link' onClick={()=>setStep(2)}>Відновити</span> </p>
        </form>
      }

      {step === 2 &&
        <form className='form-login' action="" onSubmit={handleSubmit}>
          <h3 className='form-title mb-32'>Відновлення паролю</h3>
          <p className='mb-32'>Вкажіть ваш email, щоб підвердити вашу особу</p>

          <FormInput title='Email' name='email' type='email' classList="mb-24" value={data.email} handleInput={handleInput} error={error} errorMessage='Перевірте  коректність введення email'/>

          <MainButton title='Відновити' type='submit' classList='mb-16' data={data} />

          <p className='form-forgot-descr'>Згадали пароль? <span className='form-forgot-link' onClick={()=>setStep(1)}>Увійти</span> </p>
        </form>
      }

      {step === 3 && 
        <form className='form-login' action="" onSubmit={handleSubmit}>
          <h3 className='form-title mb-32'>Відновлення паролю</h3>


          <FormInput title="Новий пароль" name='password' type='text' classList="mb-16" value={data.password} handleInput={handleInput} error={error} errorMessage=''/>
          <FormInput title="Підтвердити пароль" name='password' type='text' classList="mb-32" value={data.password} handleInput={handleInput} error={error} errorMessage='' restore/>

          <MainButton title='Увійти' type='submit' classList='' data={data} />

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





