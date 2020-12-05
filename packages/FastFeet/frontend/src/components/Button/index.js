import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyle } from './styles';

const Button = ({ text, ...rest }) => {
  return (
    <ButtonStyle type="submit" {...rest}>
      {text}
    </ButtonStyle>
  );
};

Button.propTypes = {
  text: PropTypes.node.isRequired,
};

export default Button;
