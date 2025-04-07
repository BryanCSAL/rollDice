import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home.js';
import Dados from './Dados.js';
import D4 from './D4.js';
import D6 from './D6.js';
import D8 from './D8.js';
import D10 from './D10.js';
import D12 from './D12.js';
import D20 from './D20.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dados" component={Dados} />
        <Stack.Screen name="D4" component={D4} />
        <Stack.Screen name="D6" component={D6} />
        <Stack.Screen name="D8" component={D8} />
        <Stack.Screen name="D10" component={D10} />
        <Stack.Screen name="D12" component={D12} />
        <Stack.Screen name="D20" component={D20} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

