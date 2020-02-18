import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.util';
import Logo from './Logo.png';

const Header = ({ currentUser}) =>(
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
            {
                currentUser ?
                <div className="option" onclick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to="/signin">Sign In</Link>
            }
        </div>
    </div>
)


export default Header;