import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: '#7159c1' },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main',
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            title: 'Usuário',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
