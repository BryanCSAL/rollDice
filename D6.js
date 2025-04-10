import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';

import Button from './components/button';
import D6Pic from './components/d6';
import { useHistorico } from './HistoricoContext';
import { useNavigation } from '@react-navigation/native';

export default function D6() {
  const [num, setNum] = useState(null);
  const [mod, setMod] = useState('');
  const { adicionarRolagem } = useHistorico();
  const navigation = useNavigation(); 

  const spinValue = useRef(new Animated.Value(0)).current;

  const girarDado = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handlePress = () => {
    const modificador = parseInt(mod) || 0;
    const randomNum = Math.floor(Math.random() * 6) + 1 + modificador;
    setNum(randomNum);
    adicionarRolagem('D6', randomNum);
  };

  const acessarTela = (nomeTela) => {
    navigation.navigate(nomeTela);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <D6Pic />
      </Animated.View>

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        {num !== null ? `Você tirou: ${num}` : 'Pressione o botão'}
      </Text>

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', padding: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Modificador, exemplo: 1"
          keyboardType="numeric"
          value={mod}
          onChangeText={setMod}
        />
        <Button
          title="Rolar D6"
          onPress={() => {
            handlePress();
            girarDado();
          }}
          style={{ backgroundColor: 'black', marginBottom: 10 }}
          textStyle={{ fontSize: 20 }}
        />
        <Button
          title="Histórico"
          onPress={() => acessarTela('Historico')}
          style={{ backgroundColor: 'black', marginBottom: 10 }}
          textStyle={{ fontSize: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
