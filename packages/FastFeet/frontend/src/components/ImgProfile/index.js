import React from 'react';
import PropTypes from 'prop-types';
import { FaImage } from 'react-icons/fa';

import { Content, Img, New } from './styles';

const ImgProfile = ({ name, url, border }) => {
  const names = name.split(' ');
  const initials = `${names[0].slice(0, 1)}${
    names[1] ? names[1].slice(0, 1) : ''
  }`;

  return (
    <Content url={url} initials={initials} border={border}>
      {(() => {
        if (initials) {
          return url ? (
            <Img src={url} alt={name} />
          ) : (
            <strong>{initials}</strong>
          );
        }
        return (
          <New>
            <FaImage />
            <strong>Adicionar foto</strong>
          </New>
        );
      })()}
    </Content>
  );
};

ImgProfile.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  border: PropTypes.bool,
};

ImgProfile.defaultProps = {
  name: '',
  url: '',
  border: false,
};

export default ImgProfile;
