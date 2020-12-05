import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 10px;
    }
  }
`;

export const ContentEdit = styled.div`
  background: #ffffff;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 25px;

  span {
    color: #fb6f91;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: bold;
  }
`;

export const GroupInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  & > div {
    margin-top: 0 !important;
  }

  & > div + div {
    margin-left: 2rem;
  }
`;
