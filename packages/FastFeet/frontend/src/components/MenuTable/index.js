import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';

import { Content, Dots, Menu } from './styles';

const MenuTable = ({ children }) => {
  const menuRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
      document.removeEventListener('click', handleClickOutside);
    }
  }

  function handleShowMenu() {
    setShowMenu(true);
    document.addEventListener('click', handleClickOutside);
  }

  return (
    <>
      <Content>
        <Dots ref={menuRef} onClick={handleShowMenu}>
          <FaEllipsisH />
        </Dots>
      </Content>
      <Menu show={showMenu}>{children}</Menu>
    </>
  );
};

MenuTable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuTable;
