import React, { useEffect, useRef } from 'react';
import './LayoutHeader.scss';

import Icon from 'components/Icons/IconSprite';
import { useLocation, useParams } from 'react-router-dom';

const LayoutHeader = ({ createRegToken,isLoading,createdToken}) => {
    const {pathname} = useLocation()
    const breadCrumbs = pathname.split('/')
    console.log(breadCrumbs)
 

  return(
        <div className='layout-head-container'>
          <ul className='layout-bread-list'>
            {breadCrumbs.map(el=><li>{el}</li>)}
            <li>bread1</li>
          </ul>
          <div className='layout-actions'>
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