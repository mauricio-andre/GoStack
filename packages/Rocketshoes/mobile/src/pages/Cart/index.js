import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';

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
import { formatPrice } from '../../util/format';
import {
  removeFromCart,
  updateAmountRequest,
} from '../../store/modules/Cart/actions';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sum, product) => {
        return sum + product.price * product.amount;
      }, 0)
    )
  );

  const handleUpdateAmountRequest = (id, amount) => {
    dispatch(updateAmountRequest(id, amount));
  };

  const handleRemoveFromCart = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      {cart.length <= 0 ? (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={90} color="#ddd" />
          <EmptyText>Seu carrinho está vazio</EmptyText>
        </EmptyContainer>
      ) : (
        <>
          {cart.map(product => (
            <View key={product.id}>
              <Product>
                <ProductImage
                  source={{
                    uri: product.image,
                  }}
                />
                <ProductDetails>
                  <Text>{product.title}</Text>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductDetails>
                <TouchableOpacity
                  onPress={() => handleRemoveFromCart(product.id)}
                >
                  <Icon name="delete-forever" size={22} color="#7159c1" />
                </TouchableOpacity>
              </Product>
              <ProductControls>
                <TouchableOpacity
                  onPress={() =>
                    handleUpdateAmountRequest(product.id, product.amount - 1)
                  }
                >
                  <Icon
                    name="remove-circle-outline"
                    size={22}
                    color="#7159c1"
                  />
                </TouchableOpacity>
                <ProductAmount defaultValue={product.amount.toString()} />
                <TouchableOpacity
                  onPress={() =>
                    handleUpdateAmountRequest(product.id, product.amount + 1)
                  }
                >
                  <Icon name="add-circle-outline" size={22} color="#7159c1" />
                </TouchableOpacity>
                <ProductSubtotal>{product.subtotal}</ProductSubtotal>
              </ProductControls>
            </View>
          ))}
          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalPrice>{total}</TotalPrice>
          </TotalContainer>
          <Button>
            <ButtonText>Finalizar pedido</ButtonText>
          </Button>
        </>
      )}
    </Container>
  );
}

export default connect()(Cart);
