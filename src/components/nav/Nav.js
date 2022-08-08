import React from "react";
import {Link} from 'react-router-dom'
import './nav.sass'
const Nav = () => {
    return (
        <nav className='menu'>
            <Link to='/'>Главная </Link>
            <Link to='/shop'>Магазин </Link>
            <Link to='/products'>Продукты </Link>
            <Link to='/about'>О нас </Link>
            <Link to='/contacts'>Контакты</Link>

        </nav>
    )
}
export default Nav