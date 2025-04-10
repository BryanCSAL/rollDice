import { Image } from 'react-native';

export default function D8Pic() {
  return (
    <Image 
      source={require("./Dice8.png")} 
      style={{ width: 200, height: 200 }} 
    />
  );
}