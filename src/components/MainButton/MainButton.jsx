import React,{} from 'react';
import './MainButton.scss'

import Icon from 'components/Icons/IconSprite';

const MainButton = ({title,type, data, classList,})=>{


    // useEffect(()=>{
    //     setTimeout(()=>{setIsShow(true)},20)
    // },[])

    return(
        <button type={type} className={`main-button br-20 ${classList}`} disabled={data && data.email === '' && data.password === ''}>
            {title}
        </button>
       
    )
}

export default MainButton