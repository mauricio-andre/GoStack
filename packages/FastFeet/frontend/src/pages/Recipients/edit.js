import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaAngleLeft } from 'react-icons/fa';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Header, ContentEdit, GroupInput } from './styles';
import api from '~/services/api';

const Edit = ({ comeBack, recipient }) => {
  const [name, setName] = useState(recipient.name);
  const [address, setAddress] = useState(recipient.address);
  const [complement, setComplement] = useState(recipient.complement);
  const [number, setNumber] = useState(recipient.number);
  const [city, setCity] = useState(recipient.city);
  const [region, setRegion] = useState(recipient.region);
  const [postalCode, setPostalCode] = useState(recipient.postalCode);

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    address: Yup.string().required('A Rua é obrigatório'),
    complement: Yup.string().required('O Complemento é obrigatório'),
    number: Yup.string().required('O Numero é obrigatório'),
    city: Yup.string().required('A Cidade é obrigatório'),
    region: Yup.string().required('O Estado é obrigatório'),
    postalCode: Yup.string().required('O CEP é obrigatório'),
  });

  function handleSubmit() {
    const data = {
      name,
      address,
      complement,
      number,
      city,
      region,
      postalCode,
    };

    if (recipient.id) {
      api.put(`recipients/${recipient.id}`, data).then(
        () => {
          toast.success('Registro atualizado com sucesso');
          comeBack();
        },
        () => {
          toast.error(
            'Erro ao atualizar Destinatários, tente novamente mais tarde'
          );
        }
      );
    } else {
      api.post('recipients', data).then(
        () => {
          toast.success('Registro incluído com sucesso');
          comeBack();
        },
        () => {
          toast.error(
            'Erro ao cadastrar Destinatário, tente novamente mais tarde'
          );
        }
      );
    }
  }

  return (
    <Form onSubmit={handleSubmit} schema={schema}>
      <Header>
        <h1>
          {recipient.id
            ? 'Edição de destinatários'
            : 'Cadastro de destinatários'}
        </h1>
        <div>
          <Button
            type="button"
            className="secondary"
            text={
              <>
                <FaAngleLeft /> VOLTAR
              </>
            }
            onClick={comeBack}
          />
          <Button
            type="submit"
            text={
              <>
                <FaCheck /> SALVAR
              </>
            }
          />
        </div>
      </Header>
      <ContentEdit>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          label="Nome"
          placeholder="Nome do destinatário"
        />
        <GroupInput>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            label="Rua"
            placeholder="Nome da rua"
          />
          <GroupInput>
            <Input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              name="number"
              label="Número"
              placeholder="000"
            />
            <Input
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              name="complement"
              label="Complement"
              placeholder="Casa"
            />
          </GroupInput>
        </GroupInput>
        <GroupInput>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            name="city"
            label="Cidade"
            placeholder="Joinville"
          />
          <Input
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            name="region"
            label="Estado"
            placeholder="SC"
          />
          <Input
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            name="postalCode"
            label="CEP"
            placeholder="00000-000"
          />
        </GroupInput>
      </ContentEdit>
    </Form>
  );
};

Edit.propTypes = {
  recipient: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    number: PropTypes.any,
    complement: PropTypes.string,
    region: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
  }).isRequired,
  comeBack: PropTypes.func.isRequired,
};

export default Edit;
