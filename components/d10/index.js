import { Image } from 'react-native';

export default function D10Pic() { // ← trocado aqui
  return (
    <Image 
      source={require("./Dice10.png")} 
      style={{ width: 200, height: 200 }} 
    />
  );
}