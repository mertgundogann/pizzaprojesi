import React from 'react';
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <img className='logo' src="images\iteration-1-images\logo.svg" alt="" />  
      <nav>
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/siparis">Sipariş oluştur</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
