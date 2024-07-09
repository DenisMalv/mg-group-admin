
import { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getLogedUser } from 'redux/user/userSlice'
import './UserEditForm.scss'

import Input from 'components/Input/Input';
import SelectBox from 'components/SelectBox/SelectBox';
import Modal from 'components/Modal/Modal';
import { ThreeDots } from 'react-loader-spinner';

import Icon from 'components/Icons/IconSprite';
import iconCheck from '../../img/icons/Check.svg'

import { USER_ROLES } from 'data/constants';
import SecondButton from 'components/SecondButton/SecondButton';
import { useNavigate } from 'react-router-dom';
import { useChangeUserEmailMutation, useChangeUserRoleMutation } from 'redux/usersAPI/usersAPI';


const UserEditForm = ({userData}) => {
  // отримати залогіненого юзера 
  // const user = useSelector(getLogedUser)
  // console.log(user)
  const modalOverlay = useRef(null)
  const navigate = useNavigate()
  const [newData,setNewData] = useState({
    name:userData.name,
    email:userData.email,
    role:userData.role
  })
  const [newDataError,setNewDataError] = useState({
    name:false,
    email:false,
    role:false,
  })

  const [changeRole, {isLoading:isLoadingRole,isSuccess:isSuccessRole}] = useChangeUserRoleMutation()
  const [changeEmail,  {isError:isErrorEmail,isLoading:isLoadingEmail,isSuccess:isSuccessEmail}] = useChangeUserEmailMutation()
  const [showModal, setShowModal] = useState(false);
  

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    modalOverlay && modalOverlay.current?.classList.toggle('modal-overlay-show')
    setTimeout(()=>{
      setShowModal(false)
      navigate('/users')
    },330)

  };

  const handleChange = (e)=>{
    console.log(e.target.name)
    setNewData({...newData,[e.target.name]:e.target.value})
  }

  const validate = () => {
    const errors = {};
    if (!newData.name) {
      errors.name = true;
    } else {
      errors.name = false;
    }
    if (!newData.email || !/\S+@\S+\.\S+/.test(newData.email)) {
      errors.email = true;
    } else {
      errors.email = false;
    }
    if (!newData.role || newData.role === 'none') {
      errors.role = true;
    } else {
      errors.role = false;
    }
    setNewDataError(errors);
    return Object.values(errors).every(error => !error);
  };

  const handleSubmit = async ()=>{
    if (!validate()) {
      return;
    }

    try{
      await changeEmail({id:userData._id,email:newData.email}).unwrap()
      await changeRole({id:userData._id,role:newData.role}).unwrap()
      handleOpenModal()
    }catch(error){
      handleOpenModal()
    }

  }
 
  return (<>
          <form className='user-edit-form'>
            <div className='user-edit-form-input-container '>
              <Input value={newData.name} name='name' title='Імʼя' type='text' handleChange={handleChange} error={newDataError.name} errorMessage='Заповніть поле'/>
              <Input value={newData.email} name='email' title='Email' type='text' handleChange={handleChange} error={newDataError.email}  errorMessage='Введіть корректний email'/>
            </div>

            <SelectBox title='Роль' handleChange={handleChange} value={newData.role} error={newDataError.role} errorMessage={'Оберіть роль'} placeholder={'Оберіть роль'} options={USER_ROLES}/>

            <div className='user-edit-form-btn-wrapper gap-16-to-24'>
              <SecondButton   title='Скасувати' type='button' classList='' handleClick={()=>navigate('/users')}/>
              <SecondButton   title='Зберегти' type='button' classList=''  handleClick={handleSubmit}  accent/>
            </div>

          </form>
          {
            (isLoadingEmail || isLoadingRole) &&
                <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass={`loader-overlay ${(isLoadingEmail || isLoadingRole) ? 'loader-overlay-show' : ''}`}
                />
           }
        
    
          <Modal show={showModal} onClose={handleCloseModal} overlayRef={modalOverlay}>
            <h1 className='modal-header'>Вітаю!</h1>
            <p>
              {isSuccessEmail && isSuccessRole 
              ? 'Дані користувача оновлені' 
              : `Помилка при зміні ${isErrorEmail ? 'email' : 'ролі'} користувача`}
            </p>
            {isSuccessEmail && isSuccessRole 
              ? <img src={iconCheck} alt="icon-check" />
              : <Icon classlist={``} id={``} name="close" stroke="#fff" width="56" height="56" />
            }
          
          </Modal>
    </>
  );
};

export default UserEditForm;





