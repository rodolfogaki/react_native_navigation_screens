import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/';
import Perfil from '../Perfil/';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          //options={{ title: 'Bem-vindo' }}
        />
        <Stack.Screen 
          name="Perfil" 
          component={Perfil} 
          //options={{ title: 'Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;