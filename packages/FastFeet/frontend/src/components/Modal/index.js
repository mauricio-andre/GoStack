import React from 'react';
import PropTypes from 'prop-types';

import { Background, ModalStyle } from './styles';

const Modal = ({ children, showModal }) => {
  return (
    <>
      {showModal && (
        <Background>
          <ModalStyle>{children}</ModalStyle>
        </Background>
      )}
    </>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

Modal.defaultProps = {
  children: '',
};

export default Modal;
