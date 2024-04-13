import styled from '@emotion/styled';
// import { Link, NavLink } from 'react-router-dom';
import {  NavLink } from 'react-router-dom';




export const LayoutContainer = styled.div`
  display:flex;

  width:100%;
  height:100%;

`

export const Sidebar = styled.div`
  height:100%;
  width100%;
  // max-width: 265px;

  padding-left:88px;
  padding-top:48px;
  padding-bottom:48px;

  background-color: #283935;

`
export const SidebarNavList = styled.nav`
  display:flex;
  flex-direction:column;
  gap:12px;

  margin-top:76px;
`

export const StyledNavLink = styled(NavLink)`
  width:100%;
  max-width:177px;


  padding:8px 24px 8px 0px;

  &.active{
    background-color: red;
    border-radius: 8px;
  }

`












// export const Header = styled.header`
//   display: block;
//   background: linear-gradient(#003a3efc, #7ce6f42b);
//   min-height: 50px;
//   // margin-bottom: 20px;
//   z-index: -2;
// `;

// export const Homepage = styled(Link)`
//   display: block;
//   padding: 10px 0;
//   max-width: 150px;

//   font-family: 'Oleo Script Swash Caps', cursive;
//   font-weight: 700;
//   font-size: 30px;
//   text-decoration: none;
//   color: #000;
//   transition: color 400ms ease;
//   &:hover {
//     color: #00cee4;
//   }
// `;

// export const Footer = styled.footer`
//   display: block;
//   background: linear-gradient(#7ce6f42b, #003a3efc);
//   min-height: 50px;
//   text-align: center;
// `;

// export const Navigation = styled.nav`
//   display: flex;
//   align-items: baseline;
//   justify-content: flex-start;
//   gap: 15px;
// `;

// export const NavHomepage = styled(NavLink)`
//   font-family: Roboto;
//   font-weight: 700;
//   font-size: 24px;
//   text-decoration: none;
//   color: #282828;
//   transition: color 400ms ease;
//   &:hover {
//     color: #00cee4;
//   }
//   &.active {
//     color: #00cdd5;
//     pointer-events: none;
//   }
// `;

// export const NavMovie = styled(NavLink)`
//   font-family: Roboto;
//   font-weight: 700;
//   font-size: 24px;
//   text-decoration: none;
//   color: #282828;
//   padding: 10px;
//   transition: color 400ms ease;
//   &:hover {
//     color: #00cee4;
//   }
//   &.active {
//     color: #00cdd5;
//     pointer-events: none;
//   }
// `;

export const MainContent = styled.main`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
   rgb(255 255 255 / 0%) 0%, rgb(121 255 251 / 85%) 49%, rgb(255 255 255 / 0%) 100% );
  );
  min-height: 84.3vh;
  font-family: Roboto;
  padding:20px 0
`;
