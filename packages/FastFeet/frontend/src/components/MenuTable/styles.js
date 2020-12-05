import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Dots = styled.button`
  border: none;
  background: none;
  text-align: right;
  color: #c6c6c6;
  font-size: 1.6rem;
`;

export const Menu = styled.ul`
  display: ${(props) => (props.show ? 'initial' : 'none')};
  width: 200px;
  background: #ffffff;
  border: 1px solid #00000026;
  border-radius: 0.4rem;
  padding: 10px;
  position: absolute;
  margin-left: -65px;

  &::before {
    display: inline-block;
    position: absolute;
    content: ' ';
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background: #ffffff;
    border: 1px solid #00000026;
    margin-top: -16px;
    margin-left: 90px;
    border-right: 0;
    border-bottom: 0;
  }

  li {
    font-size: 1.6rem;
    color: #999999;
    padding: 10px;

    button {
      width: 100%;
      display: flex;
      align-items: center;
      background: none;
      border: none;
    }

    svg {
      margin-right: 10px;
    }
  }

  li + li {
    border-top: 1px solid #00000026;
  }
`;
