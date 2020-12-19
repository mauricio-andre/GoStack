import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

export default function Routes() {
  const Stack = createStackNavigator();

  const headerBackImage = ({ tintColor }) => (
    <Icon name="keyboard-arrow-left" size={20} color={tintColor} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerBackImage,
          headerStyle: { backgroundColor: '#7159c1' },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Usuários',
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            title: 'Usuário',
          }}
        />
        <Stack.Screen
          name="Repository"
          component={Repository}
          options={{
            title: 'Repositório',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
