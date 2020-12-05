/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import ImgProfile from '~/components/ImgProfile';
import Input from '~/components/Input';
import MenuTable from '~/components/MenuTable';
import Panel from '~/components/Panel';
import { Table } from '~/components/Table/styles';
import api from '~/services/api';

import Edit from './edit';

import { Content, ContainerImg } from './styles';

export default function Deliverymen() {
  const [selectDeliveryman, setSelectDeliveryman] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [deliverymen, setDeliverymen] = useState([]);
  const [search, setSearch] = useState('');

  const deliverymanBase = {
    id: 0,
    name: '',
    email: '',
    avatar: {
      url: '',
    },
  };

  function handleSearchDeliverymen() {
    api
      .get('deliverymen', {
        params: {
          name: search,
        },
      })
      .then((response) => {
        setDeliverymen(response.data);
      });
  }

  useEffect(() => {
    handleSearchDeliverymen();
  }, []);

  function handleShowForm(select) {
    setShowForm(true);
    setSelectDeliveryman(select);
  }

  function handleDelete(id) {
    if (window.confirm('Deseja mesmo excluir o registro')) {
      api.delete(`deliverymen/${id}`).then(() => {
        handleSearchDeliverymen();
        toast.success('Registro excluído com sucesso');
      });
    }
  }

  return (
    <>
      {showForm ? (
        <Edit
          comeBack={() => {
            handleSearchDeliverymen();
            setShowForm(false);
          }}
          deliveryman={selectDeliveryman}
        />
      ) : (
        <Content>
          <h1>Gerenciando entregadores</h1>
          <Panel onClick={handleSearchDeliverymen}>
            <Input
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por entregadores"
            />
            <Button
              type="button"
              onClick={() => handleShowForm(deliverymanBase)}
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
                <th>Foto</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {deliverymen.map((deliveryman) => (
                <tr key={deliveryman.id}>
                  <td width="60px">{deliveryman.id}</td>
                  <td>
                    <ContainerImg>
                      <ImgProfile
                        name={deliveryman.name}
                        url={deliveryman.avatar && deliveryman.avatar.url}
                      />
                    </ContainerImg>
                  </td>
                  <td>{deliveryman.name}</td>
                  <td>{deliveryman.email}</td>
                  <td width="50px">
                    <MenuTable>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleShowForm(deliveryman)}
                        >
                          <FaEdit color="#4D85EE" />
                          Editar
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleDelete(deliveryman.id)}
                        >
                          <FaTrash color="#DE3B3B" />
                          Excluir
                        </button>
                      </li>
                    </MenuTable>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Content>
      )}
    </>
  );
}
