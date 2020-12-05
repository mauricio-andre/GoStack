import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo.png';
import history from '~/services/history';
import { signOut } from '~/store/modules/auth/actions';

import { HeaderStyle, Menu, ContentProfile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
    history.push('/');
  }

  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="Logo FastFeet" />
        <Menu>
          <li>
            <NavLink activeClassName="active" to="deliveries">
              Encomendas
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="deliverymen">
              Entregadores
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="recipients">
              Destinatários
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="problems">
              Problemas
            </NavLink>
          </li>
        </Menu>
      </div>
      <ContentProfile>
        <strong>Administrador</strong>
        <button type="button" onClick={handleLogout}>
          Sair do sistema
        </button>
      </ContentProfile>
    </HeaderStyle>
  );
}
