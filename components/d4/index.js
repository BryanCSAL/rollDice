import { Image } from 'react-native';

export default function D4Pic() { // ← trocado aqui
  return (
    <Image 
      source={require("./Dice4.png")} 
      style={{ width: 200, height: 200 }} 
    />
  );
}