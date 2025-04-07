import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Button from './components/button/index.js';
import D20Pic from './components/d20/index.js';

export default function HomeScreen({ navigation }) {

  const acessarTela = (nomeTela) => {
    navigation.navigate(nomeTela);
  };


  return (
    
    <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>

      <D20Pic />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Escolha seu dado:
      </Text>

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <View style={{  
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
          <Button 
            title="D4"
            onPress={() => acessarTela('D4')}
            style={{ backgroundColor: 'black', margin: 10, width: 100 }}
            textStyle={{ fontSize: 20 }}
          />
          <Button 
            title="D6"
            onPress={() => acessarTela('D6')}
            style={{ backgroundColor: 'black', margin: 10, width: 100 }}
            textStyle={{ fontSize: 20 }}
          />
          <Button 
            title="D8"
            onPress={() => acessarTela('D8')}
            style={{ backgroundColor: 'black', margin: 10, width: 100 }}
            textStyle={{ fontSize: 20 }}
          />
          <Button 
            title="D10"
            onPress={() => acessarTela('D10')}
            style={{ backgroundColor: 'black', margin: 10, width: 100 }}
            textStyle={{ fontSize: 20 }}
          />
          <Button 
            title="D12"
            onPress={() => acessarTela('D12')}
            style={{ backgroundColor: 'black', margin: 10, width: 100 }}
            textStyle={{ fontSize: 20 }}
          />
          <Button 
            title="D20"
            onPress={() => acessarTela('D20')}
            style={{ backgroundColor: 'black', margin: 10, width: 100 }}
            textStyle={{ fontSize: 20 }}
          />
        </View>
      </View>

    </View>
  );
}
