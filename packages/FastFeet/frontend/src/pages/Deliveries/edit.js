import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaAngleLeft } from 'react-icons/fa';
import { Form, Input as InputRocket } from '@rocketseat/unform';
import * as Yup from 'yup';
import AsyncSelect from 'react-select/async';

import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Input from '~/components/Input';

import {
  Header,
  ContentEdit,
  GroupInput,
  InputBlock,
  LabelText,
} from './styles';
import api from '~/services/api';

const Edit = ({ comeBack, delivery }) => {
  const [product, setProduct] = useState(delivery.product);
  const [listRecipients, setListRecipients] = useState([]);
  const [listDeliverymen, setListDeliverymen] = useState([]);
  const [recipientId, setRecipientId] = useState(delivery.recipient.id);
  const [deliverymanId, setDeliverymanId] = useState(delivery.deliveryman.id);

  const schema = Yup.object().shape({
    product: Yup.string().required('O nome do produto é obrigatório'),
    recipientId: Yup.string().required('Selecione um destinatário'),
    deliverymanId: Yup.string().required('Selecione um entregador'),
  });

  function handleSubmit() {
    const data = {
      product,
      recipientId,
      deliverymanId,
    };

    if (delivery.id) {
      api.put(`deliveries/${delivery.id}`, data).then(
        () => {
          toast.success('Registro atualizado com sucesso');
          comeBack();
        },
        () => {
          toast.error(
            'Erro ao atualizar Encomenda, tente novamente mais tarde'
          );
        }
      );
    } else {
      api.post('deliveries', data).then(
        () => {
          toast.success('Registro incluído com sucesso');
          comeBack();
        },
        () => {
          toast.error(
            'Erro ao cadastrar Encomenda, tente novamente mais tarde'
          );
        }
      );
    }
  }

  useEffect(() => {
    api.get('deliverymen').then((response) => {
      const options = response.data.map((deliveryman) => {
        return { value: deliveryman.id, label: deliveryman.name };
      });

      setListDeliverymen(options);
    });

    api.get('recipients').then((response) => {
      const options = response.data.map((recipient) => {
        return { value: recipient.id, label: recipient.name };
      });

      setListRecipients(options);
    });
  }, []);

  const loadRecipients = (inputValue) =>
    new Promise((resolve) => {
      resolve(
        listRecipients.filter(
          (recipient) => inputValue || recipient.label.includes(inputValue)
        )
      );
    });

  const loadDeliverymen = (inputValue) =>
    new Promise((resolve) => {
      resolve(
        listDeliverymen.filter(
          (deliveryman) => inputValue || deliveryman.label.includes(inputValue)
        )
      );
    });

  return (
    <Form onSubmit={handleSubmit} schema={schema}>
      <Header>
        <h1>
          {delivery.id ? 'Edição de encomendas' : 'Cadastro de encomendas'}
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
        <GroupInput>
          <InputBlock>
            <LabelText>Destinatário</LabelText>
            <AsyncSelect
              defaultOptions={listRecipients}
              defaultInputValue={delivery.recipient.name}
              loadOptions={loadRecipients}
              onChange={(obj) => {
                setRecipientId(obj.value);
              }}
            />
            <InputRocket name="recipientId" type="hidden" value={recipientId} />
          </InputBlock>
          <InputBlock>
            <LabelText>Entregador</LabelText>
            <AsyncSelect
              defaultOptions={listDeliverymen}
              defaultInputValue={delivery.deliveryman.name}
              loadOptions={loadDeliverymen}
              onChange={(obj) => setDeliverymanId(obj.value)}
            />
            <InputRocket
              name="deliverymanId"
              type="hidden"
              value={deliverymanId}
            />
          </InputBlock>
        </GroupInput>
        <Input
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          name="product"
          label="Nome do produto"
          placeholder="Nome do produto"
        />
      </ContentEdit>
    </Form>
  );
};

Edit.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    deliveryman: PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
    }),
    recipient: PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
    }),
  }).isRequired,
  comeBack: PropTypes.func.isRequired,
};

export default Edit;
