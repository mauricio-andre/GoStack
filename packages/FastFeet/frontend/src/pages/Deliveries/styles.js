import styled from 'styled-components';

export const Content = styled.main``;

export const ContainerImg = styled.div`
  width: 35px;
  height: 35px;
  font-size: 1.4rem;
  display: inline-block;
`;

export const GroupImgText = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: 10px;
  }
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

export const GroupInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  & > div {
    margin-top: 0 !important;
  }

  & > div + div {
    margin-left: 2rem;
  }
`;

export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    color: #fb6f91;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: bold;
  }
`;

export const LabelText = styled.label`
  color: #444444;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: bold;
  text-transform: uppercase;
`;
