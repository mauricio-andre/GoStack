import React from 'react';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const data = [
    {
      id: '0',
      texto: 'teste',
    },
    {
      id: '1',
      texto: 'teste',
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
            <ProductPrice>179.9</ProductPrice>
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
