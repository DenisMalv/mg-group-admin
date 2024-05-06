import React,{} from 'react';
import './LoginSocial.scss'

import AppleIcon from '../../img/icons/apple.svg'
import GoogleIcon from '../../img/icons/google.svg'

const LoginSocial = ({title,type, data, classList,})=>{


    // useEffect(()=>{
    //     setTimeout(()=>{setIsShow(true)},20)
    // },[])

    return(
        <div className='mb-32'>
            <p className='login-social-descr mb-16'>або за допомогою</p>
            <div className='login-social-links-wrapper flex '>            
                <a href="#1">
                    <img src={AppleIcon} alt="" />
                </a>
                <a href="#1">
                    <img src={GoogleIcon} alt="" />
                </a>
            </div>

        </div>
    )
}

export default LoginSocial