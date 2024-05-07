import { useState } from 'react';
import './RegisterForm.scss'

import FormInput from 'components/FormInput/FormInput';
import FormCheckbox from 'components/FormCheckbox/FormCheckbox';
import MainButton from 'components/MainButton/MainButton';
import LoginSocial from 'components/LoginSocial/LoginSocial';

import iconCheck from '../../img/icons/Check.svg'
import Icon from 'components/Icons/IconSprite';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({title}) => {
  const navigate = useNavigate()
  const [step,setStep] = useState(1)
  const [data,setData] = useState({
    email:'',
    password:'',
    terms:false,
    personalData:false,
  })
  const [error, setError]=useState({
    email:false,
    password:false,
    terms:false,
    personalData:false,
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
    if(e.target.checked){
        setError({...error,[name]:false})
    }

    setData({
      ...data,[name]:e.target.checked
    })

  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(data.email === ''){
      setError((prev)=>({...prev, email:true}))
    }
    if(data.password === ''){
      setError((prev)=>({...prev, password:true}))
    }
    if(data.terms === false){
      setError((prev)=>({...prev, terms:true}))
    }
    if(data.personalData === false){
      setError((prev)=>({...prev, personalData:true}))
      return
    }
  }


  return (
    <div className='form-container bg-card br-24'>
      {step===1 &&
        <form className='form-login' action="" onSubmit={handleSubmit}>
          <h3 className='form-title'>{title}</h3>

          <FormInput title='Email' name='email' type='email'  classList="mb-16" value={data.email} handleInput={handleInput} error={error} errorMessage='Перевірте  коректність введення email'/>

          <FormInput title="Пароль" name='password' type='password'  classList="mb-16" value={data.password} handleInput={handleInput} error={error} errorMessage='' restore/>

          <FormCheckbox title="Згоден на умови обслуговування" classList='mb-12'  name="terms" checked={data.terms} handleChecked={handleChecked} error={error} register/>
          <FormCheckbox title="Згоден на обробку персональних даних" classList='mb-24'  name="personalData" checked={data.personalData} handleChecked={handleChecked} error={error} register/>

          <MainButton title='Зареєструватися' type='submit' classList='mb-16' data={data} />

          <LoginSocial  />

          <p className='form-forgot-descr'>Вже є акаунт? <span className='form-forgot-link' onClick={()=>navigate('/login')}>Увійти</span> </p>
        </form>
      }

      {step === 2 && 
        <div className='step-four'>
          <Icon classlist={`step-four-icon-close`} id={`login-restore-close`} name="close" stroke="#fff" width="24" height="24" onClick={()=>setStep(1)}/>

          <h3 className=''>Вітаю!</h3>
          <h3 className='mb-32'>Реєстрація успішна</h3>
          <img src={iconCheck} alt="icon-check" />
        </div>
      }

    </div>
  );
};

export default RegisterForm;





