import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1.6rem;
  background: #7d40e7;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &.secondary {
    background: #cccccc;
  }

  svg {
    margin-right: 10px;
  }
`;
