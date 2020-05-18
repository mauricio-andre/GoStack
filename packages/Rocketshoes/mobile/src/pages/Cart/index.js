import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect, useSelector } from 'react-redux';

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
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <Container>
      {cart.length <= 0 ? (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={90} color="#ddd" />
          <EmptyText>Seu carrinho está vazio</EmptyText>
        </EmptyContainer>
      ) : (
        cart.map(product => (
          <View key={product.id}>
            <Product>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <ProductDetails>
                <Text>{product.title}</Text>
                <ProductPrice>{product.price}</ProductPrice>
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
          </View>
        ))
      )}
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

export default connect()(Cart);
