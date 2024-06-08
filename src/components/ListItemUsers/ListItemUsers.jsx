// import {  useState } from 'react';
import { convertIsoToDmy } from 'helpers/convertDate';
import './ListItemUsers.scss'
import SmallButton from 'components/SmallButton/SmallButton';

// import Icon from 'components/Icons/IconSprite';

const ROLES = {
  owner:'Власник бізнесу',
  admin:'Адміністратор',
  moderator:'Модератор',
  none: 'Не надано ролі'
}

const ListItemUsers = ({name='NewUser',email,role,lastLogined,}) => {


  

  return (

      <li className='list-item'>
        <div className='users-item-content'>
          <h3 className='user-item-name'>{name}</h3>
          <p className=''>{email}</p>
        </div>
        <div className='users-item-content'>
          <p className=''>Роль</p>
          <h4 className='users-item-role'>{ROLES[role]}</h4>
        </div>
        <div className='users-item-content'>
          <div className=''>
            <p className='mb-12'>Останнє відвідування</p>
            <h4 className='users-item-date'>{convertIsoToDmy(lastLogined)}</h4>
          </div>

          <SmallButton iconName='dots' stroke='#171C1A' color='transparent'/>
        </div>
      </li>
  )
};


export default ListItemUsers;





