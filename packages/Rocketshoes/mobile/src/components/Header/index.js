import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import { connect, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Box, Logo, Badge } from './styles';

function Header() {
  const navigation = useNavigation();
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Box>
      <RectButton onPress={() => navigation.navigate('Home')}>
        <Logo />
      </RectButton>
      <RectButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={25} color="#FFF" />
        <Badge>{cartSize}</Badge>
      </RectButton>
    </Box>
  );
}

export default connect()(Header);
