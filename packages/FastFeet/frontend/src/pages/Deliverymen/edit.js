import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaAngleLeft } from 'react-icons/fa';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import Button from '~/components/Button';
import ImgProfile from '~/components/ImgProfile';
import Input from '~/components/Input';

import { Header, ContentEdit, ContentImgEdit } from './styles';
import api from '~/services/api';

const Edit = ({ comeBack, deliveryman }) => {
  const [avatarId, setAvatarId] = useState(0);
  const [urlAvatar, setAvatarUrl] = useState(
    deliveryman.avatar && deliveryman.avatar.url
  );
  const [name, setName] = useState(deliveryman.name);
  const [email, setEmail] = useState(deliveryman.email);

  const inputFileRef = useRef(null);

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Informe um email válido')
      .required('O E-mail é obrigatório'),
  });

  async function handleUploadFile(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;

    setAvatarId(id);
    setAvatarUrl(url);
  }

  function handleSubmit() {
    const data = {
      name,
      email,
    };

    if (avatarId) {
      data.avatarId = avatarId;
    }

    if (deliveryman.id) {
      api.put(`deliverymen/${deliveryman.id}`, data).then(
        () => {
          toast.success('Registro atualizado com sucesso');
          comeBack();
        },
        () => {
          toast.error(
            'Erro ao atualizar Entregador, tente novamente mais tarde'
          );
        }
      );
    } else {
      api.post('deliverymen', data).then(
        () => {
          toast.success('Registro incluído com sucesso');
          comeBack();
        },
        () => {
          toast.error(
            'Erro ao cadastrar Entregador, tente novamente mais tarde'
          );
        }
      );
    }
  }

  return (
    <Form onSubmit={handleSubmit} schema={schema}>
      <Header>
        <h1>
          {deliveryman.id
            ? 'Edição de entregadores'
            : 'Cadastro de entregadores'}
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
        <ContentImgEdit
          type="button"
          onClick={() => inputFileRef.current.click()}
        >
          <ImgProfile border name={name} url={urlAvatar} />
          <input
            type="file"
            onChange={handleUploadFile}
            ref={inputFileRef}
            style={{ display: 'none' }}
          />
        </ContentImgEdit>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          label="Nome"
          placeholder="Nome do entregador"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          label="Email"
          placeholder="Email do entregador"
          type="email"
        />
      </ContentEdit>
    </Form>
  );
};

Edit.propTypes = {
  deliveryman: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  comeBack: PropTypes.func.isRequired,
};

export default Edit;
