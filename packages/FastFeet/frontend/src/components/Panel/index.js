import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import { PanelStyle, SearchButton } from './styles';

const Panel = ({ children, ...rest }) => {
  return (
    <PanelStyle>
      <SearchButton {...rest}>
        <FaSearch />
      </SearchButton>
      {children}
    </PanelStyle>
  );
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
