import React,{} from 'react';
import './SecondButton.scss'



const SecondButton = ({title,type, data, classList,handleClick, accent})=>{


    // useEffect(()=>{
    //     setTimeout(()=>{setIsShow(true)},20)
    // },[])
    

    return(
       accent
        ? <button type={type} className={`second-button br-12 ${classList}`} onClick={handleClick} disabled={data && data.email === '' && data.password === ''}>
        {title}
        </button>
        : <button type={type} className={`second-button-white br-12 ${classList}`}  onClick={handleClick} disabled={data && data.email === '' && data.password === ''}>
        {title}
        </button>    
       
    )
}

export default SecondButton