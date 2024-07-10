import './Layout.scss'
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Icon from 'components/Icons/IconSprite';
import { useCreateRegisterTokenMutation } from 'redux/authAPI/authAPI';
import { ThreeDots } from 'react-loader-spinner';
import LayoutHeader from 'components/LayoutHeader/LayoutHeader';

const navArr = [
  {link:'dashboard',title:'Дашборд'},
  {link:'content',title:'Контент'},
  {link:'calculation',title:'Калькуляція'},
  {link:'users',title:'Користувачі'},
  {link:'security',title:'Безпека'},
  {link:'support',title:'Підтримка'},
]

const Layout = () => {
  const [createregisterToken,{isLoading}] = useCreateRegisterTokenMutation()

  const [createdToken,setCreatedToken] = useState('')


  const handleCreateRegisterToken = async ()=>{
    try {
      const res = await createregisterToken()
      if(res){
        setCreatedToken(`http://localhost:3000/mg-group-admin/register/${res.data.token}`)
      }
    } catch (error) {
      console.log(error)
    }
    
  }



  return (
    <div className='layout'>
      <div className='sidebar'>
        <div className='sidebar-content'>
        <a href="/mg-group-admin/dashboard" className='sidebar-logo'>
          <Icon name='logo' width='112' height='56' />
        </a>
        <nav className='sidebar-nav'>
          {navArr.map(el=><NavLink className='sidebar-nav-link' key={el.link} to={el.link}>{`> ${el.title}`}</NavLink>)}
        </nav>
        </div>
      </div>
      <div className='layout-content'>
        <LayoutHeader createRegToken={handleCreateRegisterToken} isLoading={isLoading} createdToken={createdToken} />
        <div className='main-content'>
          <Suspense 
            fallback={
              <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass={`loader-overlay loader-overlay-show`}
              />
          }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Layout;
