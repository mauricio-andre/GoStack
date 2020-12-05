import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.png';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Content, Form } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

const SingIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Content>
      <img src={logo} alt="FastFeet" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input
          type="email"
          name="email"
          label="Seu e-mail"
          placeholder="exemplo@email.com"
        />

        <Input
          type="password"
          name="password"
          label="Sua senha"
          placeholder="******"
        />

        <Button text={loading ? 'Carregando...' : 'Entrar no sistema'} />
      </Form>
    </Content>
  );
};

export default SingIn;
