import React, { useEffect, useState } from 'react';
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Panel from '~/components/Panel';
import DeliveryStatus from '~/components/DeliveryStatus';
import MenuTable from '~/components/MenuTable';
import ImgProfile from '~/components/ImgProfile';
import api from '~/services/api';
import { Table } from '~/components/Table/styles';
import Edit from './edit';

import { Content, ContainerImg, GroupImgText } from './styles';
import Modal from '~/components/Modal';

export default function Deliveries() {
  const [showForm, setShowForm] = useState(false);
  const [selectDelivery, setSelectDelivery] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [deliveries, setDeliveries] = useState([]);
  const [search, setSearch] = useState('');

  function handleSearchDeliveries() {
    api
      .get('deliveries', {
        params: {
          product: search,
        },
      })
      .then((response) => {
        const data = response.data.map((delivery) => {
          const { endDate, startDate, canceledAt } = delivery;
          delivery.status = 0; // Pedente
          if (canceledAt) {
            delivery.status = 3; // Cancelado
          } else if (endDate) {
            delivery.status = 2; // Entregue
          } else if (startDate) {
            delivery.status = 1; // Retirado
          }

          if (delivery.startDate) {
            delivery.startDateFormatted = format(
              parseISO(delivery.startDate),
              'dd/MM/yyyy',
              {
                locale: pt,
              }
            );
          }

          if (delivery.endDate) {
            delivery.endDateFormatted = format(
              parseISO(delivery.endDate),
              'dd/MM/yyyy',
              {
                locale: pt,
              }
            );
          }

          return delivery;
        });
        setDeliveries(data);
      });
  }

  useEffect(() => {
    handleSearchDeliveries();
  }, []);

  function handleCloseModal() {
    setShowModal(false);
    document.removeEventListener('click', handleCloseModal);
  }

  function handleOpenModal(item) {
    setSelectDelivery(item);
    setShowModal(true);
    document.addEventListener('click', handleCloseModal);
  }

  function handleShowForm(select) {
    setShowForm(true);
    setSelectDelivery(select);
  }

  const deliveryBase = {
    id: 0,
    product: '',
    deliveryman: {
      id: '',
      name: '',
    },
    recipient: {
      id: '',
      name: '',
    },
  };

  function handleDelete(id) {
    if (window.confirm('Deseja mesmo excluir o registro')) {
      api.delete(`deliveries/${id}`).then(() => {
        handleSearchDeliveries();
        toast.success('Registro excluído com sucesso');
      });
    }
  }

  return (
    <>
      {showForm ? (
        <Edit
          comeBack={() => {
            handleSearchDeliveries();
            setShowForm(false);
          }}
          delivery={selectDelivery}
        />
      ) : (
        <Content>
          <h1>Gerenciando encomendas</h1>
          <Panel onClick={handleSearchDeliveries}>
            <Input
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por encomendas"
            />
            <Button
              type="button"
              onClick={() => handleShowForm(deliveryBase)}
              text={
                <>
                  <FaPlus />
                  CADASTRAR
                </>
              }
            />
          </Panel>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Destinatário</th>
                <th>Entregador</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td width="60px">{delivery.id}</td>
                  <td>{delivery.recipient.name}</td>
                  <td>
                    <GroupImgText>
                      <ContainerImg>
                        <ImgProfile
                          id={delivery.deliveryman.id}
                          name={delivery.deliveryman.name}
                          url={
                            delivery.deliveryman.avatar &&
                            delivery.deliveryman.avatar.url
                          }
                        />
                      </ContainerImg>
                      {delivery.deliveryman.name}
                    </GroupImgText>
                  </td>
                  <td>{delivery.recipient.city}</td>
                  <td>{delivery.recipient.region}</td>
                  <td>
                    <DeliveryStatus codeStatus={delivery.status} />
                  </td>
                  <td width="50px">
                    <MenuTable>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleOpenModal(delivery)}
                        >
                          <FaEye color="#8E5BE8" />
                          Visualizar
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleShowForm(delivery)}
                        >
                          <FaEdit color="#4D85EE" />
                          Editar
                        </button>
                      </li>
                      {delivery.status !== 2 && (
                        <li>
                          <button
                            type="button"
                            onClick={() => handleDelete(delivery.id)}
                          >
                            <FaTrash color="#DE3B3B" />
                            Excluir
                          </button>
                        </li>
                      )}
                    </MenuTable>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal showModal={showModal}>
            {selectDelivery.recipient && (
              <>
                <strong>Informações da encomenda</strong>
                <br />
                <span>
                  {selectDelivery.recipient.address},{' '}
                  {selectDelivery.recipient.number}
                </span>
                <br />
                <span>
                  {selectDelivery.recipient.city} -{' '}
                  {selectDelivery.recipient.region}
                </span>
                <br />
                <span>{selectDelivery.recipient.postalCode}</span>
                <hr />
                <strong>Datas</strong>
                <br />
                <strong>Retirada: </strong>
                <span>
                  {selectDelivery.status === 0
                    ? 'Pendente'
                    : selectDelivery.startDateFormatted}
                </span>
                <br />
                <strong>Entrega: </strong>
                <span>
                  {(() => {
                    let value = 'Pendente';
                    if (selectDelivery.status === 3) {
                      value = 'Cancelada';
                    } else if (selectDelivery.status === 2) {
                      value = selectDelivery.endDateFormatted;
                    }
                    return value;
                  })()}
                </span>
                {selectDelivery.signatureId && (
                  <>
                    <hr />
                    <strong>Assinatura do destinatário</strong>
                    <img
                      src={selectDelivery.signature.url}
                      alt="Assinatura do destinatário"
                    />
                  </>
                )}
              </>
            )}
          </Modal>
        </Content>
      )}
    </>
  );
}
