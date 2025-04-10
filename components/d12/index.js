import { Image } from 'react-native';

export default function D12Pic() {
  return (
    <Image 
      source={require("./Dice12.png")} 
      style={{ width: 200, height: 200 }} 
    />
  );
}