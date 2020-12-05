import styled from 'styled-components';

export const Content = styled.main``;

export const ContainerImg = styled.div`
  width: 35px;
  height: 35px;
  font-size: 1.4rem;
  display: inline-block;
`;

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

export const ContentImgEdit = styled.button`
  width: 150px;
  height: 150px;
  font-size: 5rem;
  margin: 0 auto 20px auto;
  background: none;
  border: none;
`;
