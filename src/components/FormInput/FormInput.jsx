import React,{ useRef } from 'react';

import Icon from 'components/Icons/IconSprite';

const FormInput = ({title, name, classList, type, value, handleInput, restore, area, data,updData,  isShow, setIsShow, error, setError,errorMessage})=>{

    const input = useRef()

    const handleShowPass =(e)=>{
        if(input.current.type ==='password'){
            input.current.type = 'text'
        }else{
            input.current.type = 'password'
        }
    }

    // useEffect(()=>{
    //     setTimeout(()=>{setIsShow(true)},20)
    // },[])

    return(
            // <div className={`input-label ${isShow ? 'show' : 'hide'}`} >
            <div className={`input-label ${classList}`} >
                <span className='input-label-text'>{title}</span>
               
                <div className={`input-wrapper`}> 

                    <input value={value} onChange={(e)=>handleInput(e,name)} className={`form-input ${error[name] ? 'error' : ''}`} type={type}  placeholder={`Введіть ${name === 'email' ? 'email' : 'пароль'}`} ref={input}/>
                    
                    {name ==='email' && <Icon classlist={`form-input-icon ${error[name] ? 'error' : 'hide'}`} id={`warning`} name="warning" color="#DD7A02" width="24" height="24"/>}
                    {name ==='password' && <Icon classlist={`form-input-icon ${error[name] ? 'error' : 'hide'}`} id={`warning`} name="eye-open" stroke="#DD7A02" color='#DD7A02' width="24" height="24" onClick={handleShowPass}/>}

                </div>
                {
                    name ==='email' && <p className={`error-message ${error[name] ? 'error' : ''}`}>{errorMessage}</p>
                }
                {
                    name ==='password' && !restore && 
                    <ul className={`error-message list ${error[name] ? 'error' : ''}`}>
                        <li >Пароль має містити мінімум 8 символів</li>
                        <li >Великі та малі літері</li>
                        <li >Має містити як мінімум одну цифру</li>
                    </ul>
                }
                {
                    restore && 
                    <ul className={`error-message list restore ${error[name] ? 'error' : ''}`}>
                        <li >Пароль має містити мінімум 8 символів</li>
                        <li >Великі та малі літері</li>
                        <li >Має містити як мінімум одну цифру</li>
                    </ul>
                }
                
            </div>
       
    )
}

export default FormInput