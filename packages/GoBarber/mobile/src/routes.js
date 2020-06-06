import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function Routes() {
  const signed = useSelector(state => state.auth.signed);
  const Stack = createStackNavigator();
  // const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {!signed ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
