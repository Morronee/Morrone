import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
      
        <header className={s.header}>
        <img className={s.logo} src="https://ventopromo.ru/sites/all/themes/flumb/logo.png"></img>
      </header>
    )
}
export default Header;