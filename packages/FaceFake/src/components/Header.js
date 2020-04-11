import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';

import logo from '../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <div id="header-container">
        <div className="header-content">
          <img src={logo} className="header-logo" title="Logo - Facebook" />
          <div className="header-profile">
            <span>Meu perfil</span>
            <FaUserCircle />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
