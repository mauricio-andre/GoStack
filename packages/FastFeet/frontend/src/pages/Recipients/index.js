import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Button from '~/components/Button';
import Input from '~/components/Input';
import MenuTable from '~/components/MenuTable';
import Panel from '~/components/Panel';
import { Table } from '~/components/Table/styles';
import api from '~/services/api';
import Edit from './edit';

export default function Recipients() {
  const [selectRecipient, setSelectRecipient] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [search, setSearch] = useState('');

  function handleSearchRecipients() {
    api
      .get('recipients', {
        params: {
          name: search,
        },
      })
      .then((response) => {
        setRecipients(response.data);
      });
  }

  const recipientsBase = {
    id: 0,
    name: '',
    address: '',
    number: '',
    complement: '',
    region: '',
    city: '',
    postalCode: '',
  };

  useEffect(() => {
    handleSearchRecipients();
  }, []);

  function handleShowForm(select) {
    setShowForm(true);
    setSelectRecipient(select);
  }

  function handleDelete(id) {
    if (window.confirm('Deseja mesmo excluir o registro')) {
      api.delete(`recipients/${id}`).then(() => {
        handleSearchRecipients();
        toast.success('Registro excluído com sucesso');
      });
    }
  }

  return (
    <>
      {showForm ? (
        <Edit
          comeBack={() => {
            handleSearchRecipients();
            setShowForm(false);
          }}
          recipient={selectRecipient}
        />
      ) : (
        <div>
          <h1>Gerenciando destinatários</h1>
          <Panel onClick={handleSearchRecipients}>
            <Input
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por destinatários"
            />
            <Button
              onClick={() => handleShowForm(recipientsBase)}
              type="button"
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
                <th>Nome</th>
                <th>Endereço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {recipients.map((recipient) => (
                <tr key={recipient.id}>
                  <td width="60px">{recipient.id}</td>
                  <td>{recipient.name}</td>
                  <td>{`${recipient.address}, ${recipient.number}, ${recipient.city} - ${recipient.region}`}</td>
                  <td width="50px">
                    <MenuTable>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleShowForm(recipient)}
                        >
                          <FaEdit color="#4D85EE" />
                          Editar
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleDelete(recipient.id)}
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
        </div>
      )}
    </>
  );
}
