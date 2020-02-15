import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import Logo from './Logo.png';

const Header = () =>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <img src={Logo} />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
        </div>
    </div>
)


export default Header;