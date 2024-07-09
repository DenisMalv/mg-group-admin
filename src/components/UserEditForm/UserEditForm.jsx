
import { useState } from 'react';
import './UserEditForm.scss'

import Input from 'components/Input/Input';
import SelectBox from 'components/SelectBox/SelectBox';
import { useSelector } from 'react-redux';
import { getLogedUser } from 'redux/user/userSlice';

// import Icon from 'components/Icons/IconSprite';

import { USER_ROLES } from 'data/constants';
import MainButton from 'components/MainButton/MainButton';
import SecondButton from 'components/SecondButton/SecondButton';
import { useNavigate } from 'react-router-dom';
import { useChangeUserEmailMutation, useChangeUserRoleMutation } from 'redux/usersAPI/usersAPI';


const UserEditForm = ({userData}) => {
  // отримати залогіненого юзера 
  // const user = useSelector(getLogedUser)
  // console.log(user)
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
  const [changeRole, {isErrorRole,isLoadingRole,isSuccessRole}] = useChangeUserRoleMutation()
  const [changeEmail, {isErrorEmail,isLoadingEmail,isSuccessEmail}] = useChangeUserEmailMutation()

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
    const resEmail = await changeEmail({id:userData._id,email:newData.email}).unwrap()
    const resRole = await changeRole({id:userData._id,role:newData.role}).unwrap()
    console.log(resEmail)
    console.log(resRole)
    }catch(error){
      console.log(error)
    }

  }
 
  return (
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
  );
};

export default UserEditForm;





