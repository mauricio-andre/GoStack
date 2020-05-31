import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function Routes() {
  const signed = useSelector(state => state.auth.signed);
  const Stack = createStackNavigator();
  // const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {!signed ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              header: () => {},
            }}
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen
            options={{
              header: () => {},
            }}
            name="SignUp"
            component={SignUp}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator independent>
          <Stack.Screen
            options={{
              header: () => {},
            }}
            name="Dashboard"
            component={Dashboard}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
