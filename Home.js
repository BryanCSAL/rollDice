import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Button from './components/button/index.js';
import D20Pic from './components/d20/index.js';

export default function Home({ navigation }) {
  const [num, setNum] = useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
      <D20Pic />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        {num !== null ? num : 'Pressione o botão'}
      </Text>

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 20 }}>

        <Button
          title={'Dados'}
          onPress={() => navigation.navigate('Dados')} 
          style={{ backgroundColor: 'black', marginBottom: 10 }}
          textStyle={{ fontSize: 20 }}
        />
      </View>
    </View>
  );
}
