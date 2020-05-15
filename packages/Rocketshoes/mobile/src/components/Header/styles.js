import styled from 'styled-components/native';

export const Box = styled.View`
  height: 60px;
  background: #191920;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  height: 25px;
  width: 192px;
`;

export const Badge = styled.Text`
  color: #fff;
  background: #7159c1;
  font-size: 12px;
  line-height: 12px;
  padding: 4px 5px 3px 6px;
  border-radius: 12px;
  align-self: center;
  position: absolute;
  top: -9px;
  right: -7px;
`;
