import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import ArchiveIcon from '@mui/icons-material/Archive';

const NavBar = () => {
  return (
    <div className='navbar'>
        <h1 className='navbar__title'><Link to='/'>E-commerce</Link></h1> 
        <ul className='navbar__list'>
            <li className='navbar__item'><Link to='/login'>
              <LoginIcon/>
            </Link></li>
            <li className='navbar__item'><Link to='/purchases'>
              <ArchiveIcon/>
            </Link></li>
            <li className='navbar__item'><Link to='/cart'>
              <ShoppingCartIcon/>
            </Link></li>
        </ul>
    </div> 
  );
}

export default NavBar;