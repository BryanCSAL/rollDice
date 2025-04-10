import { Image } from 'react-native';

export default function D20Pic() {
  return (
    <Image 
      source={require("./Dice20.png")} 
      style={{ width: 200, height: 200 }} 
    />
  );
}