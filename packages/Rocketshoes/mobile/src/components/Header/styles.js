import styled from 'styled-components/native';

const logo = require('../../assets/images/logo.png');

export const Box = styled.View`
  height: 60px;
  background: #191920;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 25px;
  width: 192px;
`;

export const Badge = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
