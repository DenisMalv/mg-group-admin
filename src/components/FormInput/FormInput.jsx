import React,{} from 'react';

import Icon from 'components/Icons/IconSprite';

const FormInput = ({area, data,updData,  isShow, setIsShow, error, setError,errorMessage})=>{

    

    // useEffect(()=>{
    //     setTimeout(()=>{setIsShow(true)},20)
    // },[])

    return(
            // <div className={`input-label ${isShow ? 'show' : 'hide'}`} >
            <div className={`input-label 'show' `} >
                <span className='input-label-text'>Площа, кв.м.</span>
               
                <div className={`input-wrapper`}> 

                    <input className={`form-input ${error ? 'error' : ''}`} name={area} id={area} type='number' onChange={(e)=>updData(area,e.target.value)} value={data} placeholder='Введіть email'/>
                    
                    <Icon classlist={`form-input-icon ${error ? 'error' : 'hide'}`} id={`${area}-icon`} name="warning" color="#DD7A02" width="24" height="24"/>

                </div>
                <p className={`error-message ${error ? 'error' : ''}`}>{errorMessage}</p>
                
            </div>
       
    )
}

export default FormInput