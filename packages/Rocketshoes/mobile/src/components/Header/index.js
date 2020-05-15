import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import { Box, Logo, Badge } from './styles';

const logo = require('../../assets/images/logo.png');

function Header({ navigation }) {
  return (
    <Box>
      <RectButton onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} />
      </RectButton>
      <RectButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={25} color="#FFF" />
        <Badge>0</Badge>
      </RectButton>
    </Box>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Header;
