import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

import { Content } from './styles';

const listStatus = ['Pendente', 'Retirada', 'Entregue', 'Cancelada'];

const DeliveryStatus = ({ codeStatus }) => {
  return (
    <Content status={codeStatus}>
      <FaCircle />
      {listStatus[codeStatus]}
    </Content>
  );
};

DeliveryStatus.propTypes = {
  codeStatus: PropTypes.number.isRequired,
};

export default DeliveryStatus;
