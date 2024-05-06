import React,{ useEffect } from 'react';
import './FormCheckbox.scss'

import Icon from 'components/Icons/IconSprite';

const FormCheckbox = ({title, name, classList, checked, handleChecked, error })=>{


    useEffect(()=>{
        // setTimeout(()=>{setIsShow(true)},20)
    },[])

    return(
            <div className={`checkbox-wrapper ${classList}`}  >

                <label htmlFor={name} className='checkbox-label'>
                    <div className={`checkbox-input-wrapper ${checked ? 'checked' : ''}`}>
                        <input type="checkbox" name={name} id={name} className='checkbox-input'  checked={checked} onChange={(e)=>handleChecked(e,name)}  /> 
                        <Icon classlist={`checkbox-input-icon ${checked ? 'checked' : ''}`} id={`arrow-correct`} name="arrow-correct" color='transparent' stroke="#f6f7f7" width="24" height="24"/>
                    </div>
                    {title}
                </label> 
            </div>
       
    )
}

export default FormCheckbox