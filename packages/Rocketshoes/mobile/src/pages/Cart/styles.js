import styled from 'styled-components';

export const Container = styled.View`
  background: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin: 0 10px;
  justify-content: space-between;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-top: 5px;
`;

export const ProductControls = styled.View`
  background: #eee;
  padding: 8px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  color: #000;
  font-size: 16px;
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  height: 30px;
`;

export const ProductSubtotal = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin: 30px 0;
`;

export const TotalText = styled.Text`
  color: #999;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TotalPrice = styled.Text`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 4px;
  background: #7159c1;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const EmptyContainer = styled.View`
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
