import React,{ useRef } from 'react';
import './Input.scss'

import Icon from 'components/Icons/IconSprite';

const Input = ({title,classList,value='',name,type,handleChange,error,errorMessage})=>{

    const input = useRef()

    

    // useEffect(()=>{
    //     setTimeout(()=>{setIsShow(true)},20)
    // },[])

    return(
            <label className={`input-lab ${classList}`} >
                <span className='input-lab-text'>{title}</span>
               
                <div className={`input-wrap`}> 

                    <input value={value} onChange={handleChange} name={name} className={`form-input-iso ${error ? 'error' : ''}`} type={type}   ref={input} placeholder='Введіть імʼя'/>
                    <Icon classlist={`form-input-ico ${error ? 'error' : ''}`} id={`warning`} name="warning" color="#DD7A02" width="24" height="24"/>
                    <Icon classlist={`form-input-ico `} id={`arrow-correct`} name="arrow-correct" color="transparent" stroke='#333C38' width="24" height="24"/>
                    {/* <p className={`form-error-message ${error ? 'error' : ''}`}>{errorMessage}</p> */}

                    {/* {name ==='email' && <Icon classlist={`form-input-ico ${error[name] ? 'error' : 'hide'}`} id={`warning`} name="warning" color="#DD7A02" width="24" height="24"/>} */}
                    {/* {name ==='password' && <Icon classlist={`form-input-icon ${error[name] ? 'error' : 'hide pass'}`} id={`warning`} name="eye-open" stroke={`${error[name] ? "#DD7A02" : "#73877B"}`} color={`${error[name] ? "#DD7A02" : "#73877B"}`} width="24" height="24" onClick={handleShowPass}/>} */}

                </div>
                <p className={`form-error-message ${error ? 'error' : ''}`}>{errorMessage}</p>
            </label>
    )
}

export default Input
