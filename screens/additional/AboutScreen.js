import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Line } from '../../components/Line';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen({  }) {
  return (
    <>
      <StatusBar animated barStyle="light-content" backgroundColor="#0a0a0a" />      
      
      <LinearGradient
        colors={['#171717', '#0a0a0a', '#0a0a0a', '#0a0a0a', '#171717']}  
        style={{ flex: 1 }}  
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}  
      >
  
        <View className="flex-1  items-center justify-center">
        <Line className="text-2xl mb-4">About</Line>
        
        </View>
      </LinearGradient>
    </>
  );
}