import styled from 'styled-components';

import { Form as FormStyle } from '@rocketseat/unform';

export const Content = styled.div`
  width: 360px;
  max-width: 100vw;
  background: #fcfcfc;
  border-radius: 0.4rem;
  margin: 0 auto;
  padding: 40px 30px;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 90%;
  }

  @media (max-width: 500px) {
    & {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      justify-content: center;

      img {
        width: 80vw;
        position: absolute;
        top: 60px;
      }
    }
  }
`;

export const Form = styled(FormStyle)`
  width: 100%;
  margin-top: 40px;

  span {
    color: #fb6f91;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: bold;
  }
`;
