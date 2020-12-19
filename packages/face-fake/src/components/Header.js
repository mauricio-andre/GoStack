import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import logo from '../assets/logo.svg';

const Header = () => (
  <div id="header-container">
    <div className="header-content">
      <img
        src={logo}
        alt="Logo do sistema face-fake"
        className="header-logo"
        title="Logo - Facebook"
      />
      <div className="header-profile">
        <span>Meu perfil</span>
        <FaUserCircle />
      </div>
    </div>
  </div>
);

export default Header;
