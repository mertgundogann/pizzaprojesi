import React from 'react';
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <h1>Teknolojik yemekler</h1>
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
