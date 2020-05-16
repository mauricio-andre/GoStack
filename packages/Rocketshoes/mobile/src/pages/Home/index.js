import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Card,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Button,
  ButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await api.get('/products');
    setProducts(response.data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        horizontal
        keyExtractor={product => product.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <ProductImage
              source={{
                uri: item.image,
              }}
            />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
            <Button>
              <ProductAmount>
                <Icon name="add-shopping-cart" size={22} color="#fff" />
                <ProductAmountText>0</ProductAmountText>
              </ProductAmount>
              <ButtonText>Adicionar</ButtonText>
            </Button>
          </Card>
        )}
      />
    </View>
  );
}
