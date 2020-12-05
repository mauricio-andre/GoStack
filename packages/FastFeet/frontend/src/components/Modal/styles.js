import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000b6;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalStyle = styled.div`
  width: 400px;
  max-width: 400px;
  background: #ffffff;
  border-radius: 0.4rem;
  padding: 2rem;

  strong {
    color: #444444;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  span {
    color: #666666;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  hr {
    border: 1px solid #00000026;
    margin: 10px 0;
  }

  img {
    max-width: 100%;
  }
`;
