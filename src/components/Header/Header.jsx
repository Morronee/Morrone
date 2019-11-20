import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.logo} src="https://ventopromo.ru/sites/all/themes/flumb/logo.png"></img>
      <div className={s.loginAuth}>
        {props.isAuth ? <h4>{props.login}<span onClick={props.logout}>Logout</span></h4> : <NavLink to='/login'>Login</NavLink> }
      </div>
    </header>
  )
}
export default Header;