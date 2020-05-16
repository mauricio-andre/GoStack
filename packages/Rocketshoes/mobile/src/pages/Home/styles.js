import styled from 'styled-components';
import { darken } from 'polished';

export const Card = styled.View`
  width: 220px;
  background: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 13px 0;
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 8px 12px;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 10px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;
