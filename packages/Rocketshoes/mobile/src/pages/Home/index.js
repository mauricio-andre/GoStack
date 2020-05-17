import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { addToCartRequest } from '../../store/modules/Cart/actions';

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

function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  async function loadProducts() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    setProducts(data);
  }

  const handleAddProduct = product => {
    dispatch(addToCartRequest(product));
  };

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
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <Button onPress={() => handleAddProduct(item)}>
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

export default connect()(Home);
