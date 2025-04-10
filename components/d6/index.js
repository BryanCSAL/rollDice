import { Image } from 'react-native';

export default function D6Pic() {
  return (
    <Image 
      source={require("./Dice6.png")} 
      style={{ width: 200, height: 200 }} 
    />
  );
}