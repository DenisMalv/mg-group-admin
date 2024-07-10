import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentEditUser } from 'redux/users/usersSlice';

import './LayoutHeader.scss';

import Icon from 'components/Icons/IconSprite';
import SmallButton from 'components/SmallButton/SmallButton';
import { ThreeDots } from 'react-loader-spinner';
import { convertBread } from 'helpers/convertBread';


const LayoutHeader = ({ createRegToken,isLoading,createdToken}) => {
    const {id} = useParams()
    const {pathname} = useLocation()

    const breadCrumbs = convertBread(pathname,id)

    const editedUser = useSelector(getCurrentEditUser)
    const [editUserBreadLoading, setEditBreadLoading] = useState(true)

    useEffect(()=>{
        if(editedUser._id){
            setEditBreadLoading(false)
        }else{
            setEditBreadLoading(true)
        }
    },[editedUser])
 
    

  return(
        <div className='layout-head-container'>
          <ul className='layout-bread-list flex ai-c'>
            {breadCrumbs.map((el,i)=>
            <li className='flex ai-c'>
              <NavLink to={el.link} className={'123'}>
                {el.name}
                {console.log(i)}
                {i>0 &&  <Icon classlist={``} id={``} name="arrow-right" color='black' stroke="#f6f7f7" width="24" height="24"/>}
              </NavLink>
            </li>)
            }
            
            {editedUser && id && 
              <li className='flex ai-c'>
                <Icon classlist={``} id={``} name="arrow-right" color='transparent' stroke="#f6f7f7" width="24" height="24"/>
                {id && editUserBreadLoading && 
                  <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass={`loader-overlay loader-overlay-show bread`}
                  />
                }
                
                {editedUser && editedUser.email}
              </li>
            }
            
          </ul>
          <div className='layout-actions'>
            <SmallButton iconName='search' stroke='#3C4942' color='transparent' secondBtn handleClick={()=>''}/>
            <SmallButton iconName='plus' stroke='#F6F7F7' color='#F6F7F7' customStyles={'btn-plus'} handleClick={createRegToken}/>
            <button >
              <Icon stroke='currentColor'   name='search' width='24' height='24'/>
            </button>
            <button onClick={createRegToken}>
              <Icon stroke='currentColor'   name='plus' width='24' height='24'/>
            </button>
            <p>{isLoading? 'Loading...' : createdToken}</p>
          </div>
        </div>  
  )
}

export default LayoutHeader;