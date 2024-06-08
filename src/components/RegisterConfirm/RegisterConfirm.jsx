// import { useEffect } from 'react';
import './RegisterConfirm.scss'

import iconCheck from '../../img/icons/Check.svg'
import Icon from 'components/Icons/IconSprite';
import { useNavigate,useParams } from 'react-router-dom';
import { useConfirmEmailQuery } from 'redux/auth/authAPI';

const RegisterConfirm = () => {
  const {confirmToken} = useParams()
  console.log(confirmToken)
  const navigate = useNavigate()

  const {isLoading,isSuccess,isError} = useConfirmEmailQuery(confirmToken)

  return (
    <div className='form-container bg-card br-24'>

      {isLoading && <h1>Loading...</h1>}

      {isSuccess &&
        <div className='step-four'>
          <Icon classlist={`step-four-icon-close`} id={`login-restore-close`} name="close" stroke="#fff" width="24" height="24" onClick={()=>navigate('/login')}/>

          <h3 className=''>Email</h3>
          <h3 className='mb-32'>підтверджено</h3>
          <img src={iconCheck} alt="icon-check" />
        </div>
      }


      {isError &&
        <div className='step-four'>
          <Icon classlist={`step-four-icon-close`} id={`login-restore-close`} name="close" stroke="#fff" width="24" height="24" onClick={()=>navigate('/login')}/>

          <h3 className=''>Помилка</h3>
          <h3 className='mb-32'>підтвердження email</h3>
          {/* <img src={iconCheck} alt="icon-check" /> */}
          <p style={{fontSize:'50px'}}>😔</p>
        </div>
        }

    </div>
  );
};

export default RegisterConfirm;





