// import { Container } from 'components/App.styled';
// import { AppBar } from 'components/AppBar/AppBar';
// import { Header, Footer, MainContent } from './Layout.styled';
// import { LayoutContainer, Sidebar,SidebarNavList, StyledNavLink, } from './Layout.styled';
import './Layout.scss'
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Icon from 'components/Icons/IconSprite';
// import Loader from 'components/Loader/Loader';

const navArr = [
  {link:'dashboard',title:'Дашборд'},
  {link:'content',title:'Контент'},
  {link:'calculation',title:'Калькуляція'},
  {link:'users',title:'Користувачі'},
  {link:'security',title:'Безпека'},
  {link:'support',title:'Підтримка'},
]

const Layout = () => {
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
        <div className='layout-head-container'>
          <ul className='layout-bread-list'>
            <li>bread1</li>
          </ul>
          <div className='layout-actions'>
            <button >
              <Icon stroke='currentColor'   name='search' width='24' height='24'/>
            </button>
            <button >
              <Icon stroke='currentColor'   name='plus' width='24' height='24'/>
            </button>
          </div>
        </div>
        <div className='main-content'>
          <Suspense fallback={<div style={{background: 'red'}}>LOADER</div>}>
            <Outlet/>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;







// <LayoutContainer>
    //   <Sidebar>
    //     <div>
    //     <a href="/" className='sidebar-logo'>
    //       <svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <g clip-path="url(#clip0_564_9857)">
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0L32.037 28.2205C37.1211 22.7101 39.0328 20.4102 43 16.1102V25.2858L32.037 37.0394L10.9011 14.1102V56H6V0Z" fill="#F6F7F7"/>
    //         <path d="M55.7992 56H52.1992V42H63.0992V44.8H55.7992V56Z" fill="#FFC935"/>
    //         <path d="M64.5039 42H72.9039C74.3039 42 75.3172 42.32 75.9439 42.96C76.5839 43.5867 76.9039 44.6 76.9039 46V48C76.9039 49.4 76.5839 50.42 75.9439 51.06C75.3172 51.6867 74.3039 52 72.9039 52H68.1039V56H64.5039V42ZM73.3039 46C73.3039 45.2 72.9039 44.8 72.1039 44.8H68.1039V49.2H72.1039C72.9039 49.2 73.3039 48.8 73.3039 48V46Z" fill="#FFC935"/>
    //         <path d="M81.6725 56.2C81.0058 56.2 80.3192 56.1333 79.6125 56V53.3H81.4125C81.7992 53.3 82.0658 53.1467 82.2125 52.84C82.2792 52.7067 82.3125 52.5667 82.3125 52.42C82.3125 52.26 82.2792 52.12 82.2125 52L76.7125 42H80.7125L84.3125 49.1L87.3125 42H91.3125L86.2125 53C85.7458 54.0533 85.1858 54.84 84.5325 55.36C83.8125 55.92 82.8592 56.2 81.6725 56.2Z" fill="#FFC935"/>
    //         <path d="M104.321 56H100.721V44.8H95.7211V56H92.1211V42H104.321V56Z" fill="#FFC935"/>
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M83.3482 14.2147L48.0024 3.85655V0H46.8869H43.6478H42.5322L42.5323 4.22515L30.5 16.3983L33.1156 16.3985H42.5324V45.4999L42.5314 45.5013L42.5323 53.7689L42.5314 56H48.0023V45.3781V16.3983H83.0261L83.3482 14.2147ZM35.7969 14.1673H42.5322V7.39024L35.7969 14.1673ZM44.7633 53.7689H45.7713V16.3983H44.7633V53.7689ZM44.7633 14.1673H45.7713V5.8008H44.7633V14.1673ZM44.7633 3.56967H45.7713V2.23103H44.7633V3.56967ZM53.8359 7.64453L48.0024 6.18689V12.478L53.8359 7.64453ZM55.6956 8.9403L49.4684 14.1673H60.9226L55.6956 8.9403ZM59.1613 9.2507L63.4485 13.538L65.7488 11.2375L59.1613 9.2507ZM68.1732 11.9684L65.9744 14.1673H75.464L68.1732 11.9684Z" fill="#FFD74A"/>
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5323 53.7689L42.5314 56V45.5013L42.5323 53.7689ZM48.0023 45.3781V56L48.0024 53.7688L48.0023 45.3781Z" fill="#FFD74A"/>
    //         <path d="M45.7713 53.7689H44.7633V16.3983H45.7713V53.7689Z" fill="#FFD74A"/>
    //         <path d="M45.7713 14.1673H44.7633V5.8008H45.7713V14.1673Z" fill="#FFD74A"/>
    //         <path d="M45.7713 3.56967H44.7633V2.23103H45.7713V3.56967Z" fill="#FFD74A"/>
    //         <path d="M80.0971 29.0704V28.0945H81.7938C81.7938 28.0945 81.7938 27.6033 81.7938 26.9973V23.0473C81.7938 22.4413 81.7938 21.95 81.7938 21.95H80.3166V18C80.3166 18 79.8254 18 79.2194 18C78.6134 18 78.1944 18 78.1944 18L78.1221 21.95H77.413C76.807 21.95 76.3157 21.95 76.3157 21.95V26.9973C76.3157 27.6033 76.3157 28.0945 76.3157 28.0945H77.9027V29.9599C77.9027 30.5659 78.3939 31.0571 78.9999 31.0571C79.4441 31.0571 79.8054 31.4185 79.8054 31.8625C79.8054 32.3067 79.444 32.668 78.9999 32.668C78.699 32.668 78.1944 32.1193 78.1944 32.1193H76C76 33.7088 77.2617 34.8624 79 34.8624C80.6542 34.8624 82 33.5167 82 31.8624C81.9998 30.5955 81.2101 29.5093 80.0971 29.0704ZM79.5992 25.9001H78.51V24.1445H79.5992V25.9001Z" fill="#FFC935"/>
    //         </g>
    //         <defs>
    //         <clipPath id="clip0_564_9857">
    //         <rect width="112" height="56" fill="white"/>
    //         </clipPath>
    //         </defs>
    //       </svg>
    //     </a>
    //     <SidebarNavList >
    //       {navArr.map(el=><StyledNavLink className='' key={el.link} to={el.link}>{`> ${el.title}`}</StyledNavLink>)}
    //     </SidebarNavList>
    //     </div>
    //   </Sidebar>
    //   <div>
    //     <div className='head-container'>
    //       <ul className='bread-list'>
    //         <li>bread1</li>
    //       </ul>
    //       <div className='actions'>
    //         <ul>
    //           <li>search</li>
    //           <li>add</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className='main-content'>
    //       <Suspense fallback={<div style={{background: 'red'}}>LOADER</div>}>
    //         <Outlet/>
    //       </Suspense>
    //     </div>
    //   </div>
    // </LayoutContainer>