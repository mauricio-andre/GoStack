import styled from 'styled-components';

export const PanelStyle = styled.div`
  display: flex;
  margin: 30px 0;

  input {
    max-width: 300px;
    margin-left: -0.4rem;
  }

  button {
    width: auto;
    margin-top: 0px;
    margin-left: 30px;
  }
`;

export const SearchButton = styled.button`
  font-size: 1.4rem;
  padding: 1.6rem;
  color: #ffffff;
  background: #7d40e7;
  border: none;
  margin: 0 !important;
  border-radius: 0.4rem 0 0 0.4rem;
  z-index: 10;
`;
