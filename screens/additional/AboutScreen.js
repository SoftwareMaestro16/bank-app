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
  
        <View className="flex mt-5 items-center justify-center">
            <View className="p-6">
                <Line className="text-2xl">
                    This application is a simulation of a banking system, developed solely for experimental and educational purposes. It is designed to mimic the look and feel of a real banking experience, but does not perform any actual financial transactions.
                </Line>
                <Line>{"  "}</Line>
                <Line className="text-2xl">
                    No real money is transferred, stored, or managed through this app. All data, balances, and operations presented within the application are fictitious and exist only for demonstration and testing purposes.
                </Line>
            </View>            
        </View>
      </LinearGradient>
    </>
  );
}