import React from 'react';
import PropTypes from 'prop-types';
import { InputBlock, LabelText, InputText } from './styles';

const Input = ({ name, label, ...rest }) => {
  return (
    <InputBlock>
      <LabelText htmlFor={name}>{label}</LabelText>
      <InputText type="Text" id={name} name={name} {...rest} />
    </InputBlock>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  label: '',
};

export default Input;
