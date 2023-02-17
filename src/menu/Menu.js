import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.jpg'
import './Menu.css';

function Menu() {
  const activeStyle = {
    backgroundColor: '#aa53d9',
    color: 'white'
  }
// dd
  
  
  return (
    <>
      <div className='top'>
        <Link to="/doit">
          <img src={logo} alt="DoIT Inc. logo" height="80" />
        </Link>
        <ul className='menuList'>
          <div id="wrap1">
          <div className='goLec'><NavLink activeStyle={activeStyle} to="/Lecture1">수강신청</NavLink></div>
          <div className='goLog'><NavLink activeStyle={activeStyle} to="/login">로그인</NavLink></div>
          <div className='goBo'><NavLink activeStyle={activeStyle} to="/board">게시판</NavLink></div>
          <div className='goMy'><NavLink activeStyle={activeStyle} to="/mypage">마이페이지</NavLink></div>
          </div>
        </ul>
      </div>
    </>
);
}

export default Menu;
