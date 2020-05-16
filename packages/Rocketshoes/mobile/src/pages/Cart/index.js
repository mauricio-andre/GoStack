import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductImage,
  ProductDetails,
  ProductPrice,
  ProductControls,
  ProductSubtotal,
  ProductAmount,
  TotalContainer,
  TotalText,
  TotalPrice,
  Button,
  ButtonText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Product>
        <ProductImage
          source={{
            uri:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          }}
        />
        <ProductDetails>
          <Text>Tênis de Caminhada Leve Confortável</Text>
          <ProductPrice>179.9</ProductPrice>
        </ProductDetails>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="delete-forever" size={22} color="#7159c1" />
        </TouchableOpacity>
      </Product>
      <ProductControls>
        <Icon name="add-circle-outline" size={22} color="#7159c1" />
        <ProductAmount value="1" />
        <Icon name="remove-circle-outline" size={22} color="#7159c1" />
        <ProductSubtotal>179.9</ProductSubtotal>
      </ProductControls>
      <TotalContainer>
        <TotalText>Total</TotalText>
        <TotalPrice>179.9</TotalPrice>
      </TotalContainer>
      <Button>
        <ButtonText>Finalizar pedido</ButtonText>
      </Button>
    </Container>
  );
}
