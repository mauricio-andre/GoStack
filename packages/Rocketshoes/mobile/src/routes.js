import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  const Stack = createStackNavigator();

  const theme = {
    colors: {
      background: '#191920',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: () => <Header />,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            header: () => <Header />,
          }}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
