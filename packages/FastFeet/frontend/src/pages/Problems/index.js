import React, { useEffect, useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import MenuTable from '~/components/MenuTable';
import Modal from '~/components/Modal';
import { Table } from '~/components/Table/styles';
import api from '~/services/api';

import { Content } from './styles';

export default function Problems() {
  const [selectProblem, setSelectProblem] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    api
      .get('deliveries', {
        params: {
          problem: 'yes',
        },
      })
      .then((response) => {
        setDeliveries(response.data);
      });
  }, []);

  function handleCloseModal() {
    setShowModal(false);
    document.removeEventListener('click', handleCloseModal);
  }

  function handleOpenModal(item) {
    setSelectProblem(item);
    setShowModal(true);
    document.addEventListener('click', handleCloseModal);
  }

  function handleCancel(id) {
    if (window.confirm('Deseja mesmo cancelar a entrega')) {
      api.delete(`problem/${id}/cancel-delivery`);
      toast.success('Encomenda cancelada com sucesso');
    }
  }

  return (
    <Content>
      <h1>Problemas na entrega</h1>
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) =>
            delivery.deliveryProblem.map((problem) => (
              <tr key={delivery.id}>
                <td width="60px">{delivery.id}</td>
                <td>{problem.description}</td>
                <td width="50px">
                  <MenuTable>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleOpenModal(problem.description)}
                      >
                        <FaEye color="#8E5BE8" />
                        Visualizar
                      </button>
                    </li>
                    {delivery.canceledAt === delivery.endDate && (
                      <li>
                        <button
                          type="button"
                          onClick={() => handleCancel(problem.id)}
                        >
                          <FaTimes color="#DE3B3B" />
                          Cancelar encomenda
                        </button>
                      </li>
                    )}
                  </MenuTable>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Modal showModal={showModal}>
        <strong>Visualizar problema</strong>
        <br />
        <br />
        <span>{selectProblem}</span>
      </Modal>
    </Content>
  );
}
