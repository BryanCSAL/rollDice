import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

function Button({ onPress, title = "Rolar D20", style, textStyle }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
  const styles = StyleSheet.create({ // Uma constante é uma variável que armazena valores imutáveis
    button: {
      width: 180,
      height: 60,
      backgroundColor: '#000000',
      borderRadius: 10, // Arredonda a borda
      justifyContent: 'center', // Centraliza Verticalmente
      alignItems: 'center' // Centraliza Horizontalmente
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center' // Alinha Texto
    }
  })


export default Button;