import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & + &,
  & + button {
    margin-top: 2rem;
  }
`;

export const LabelText = styled.label`
  color: #444444;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const InputText = styled(Input)`
  width: 100%;
  font-size: 1.4rem;
  color: #444444;
  padding: 1.6rem;
  border: 1px solid #dddddd;
  border-radius: 0.4rem;

  &::placeholder {
    color: #999999;
  }
`;
