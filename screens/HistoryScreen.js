import { Text, View, TouchableOpacity, StatusBar, ScrollView, SafeAreaView, Platform, Image } from 'react-native';
import { Line } from '../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton } from 'react-native-paper';

export default function HistoryScreen({ navigation }) {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

  return (
    <>
      <StatusBar animated barStyle="light-content" backgroundColor="#0a0a0a" /> 

      <LinearGradient
        colors={['#171717', '#0a0a0a', '#0a0a0a', '#0a0a0a', '#171717']}  
        style={{ flex: 1 }}  
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}  
      >

        <SafeAreaView style={{ flex: 1, paddingTop }}>
          <View className="mx-auto">
            <Line className="text-center mt-3 text-2xl border-b w-[92vw] border-b-white/30 pb-2 mb-7">Transactions History</Line>
            <ScrollView 
              showsVerticalScrollIndicator={false} 
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-col">

              <View className="bg-gray-400/20 rounded-xl h-[55px] flex-row items-center justify-between mb-1">
                <IconButton
                  icon="cash-minus"
                  iconColor="white"
                  size={40}
                  animated
                />
                <View className="flex-1 flex-row justify-between ml-2">
                  <View className="flex-col">
                    <Line>APPlE.COM/BILL</Line>
                    <Line>19.04.2025</Line>
                  </View>
                  <Line className="pr-5">100.00 USD</Line>
                </View>
              </View>

              <View className="bg-gray-400/20 rounded-xl h-[55px] flex-row items-center justify-between mb-1">
                <IconButton
                  icon="cash-plus"
                  iconColor="white"
                  size={40}
                  animated
                />
                <View className="flex-1 flex-row justify-between ml-2">
                  <View className="flex-col">
                    <Line>Transfer</Line>
                    <Line>19.04.2025</Line>
                  </View>
                  <Line className="pr-5">100.00 USD</Line>
                </View>
              </View>

              <View className="bg-gray-400/20 rounded-xl h-[55px] flex-row items-center justify-between mb-1">
                <IconButton
                  icon="cash-minus"
                  iconColor="white"
                  size={40}
                  animated
                />
                <View className="flex-1 flex-row justify-between ml-2">
                  <View className="flex-col">
                    <Line>APPlE.COM/BILL</Line>
                    <Line>19.04.2025</Line>
                  </View>
                  <Line className="pr-5">100.00 USD</Line>
                </View>
              </View>

              <View className="bg-gray-400/20 rounded-xl h-[55px] flex-row items-center justify-between mb-1">
                <IconButton
                  icon="cash-minus"
                  iconColor="white"
                  size={40}
                  animated
                />
                <View className="flex-1 flex-row justify-between ml-2">
                  <View className="flex-col">
                    <Line>APPlE.COM/BILL</Line>
                    <Line>19.04.2025</Line>
                  </View>
                  <Line className="pr-5">100.00 USD</Line>
                </View>
              </View>

              <View className="bg-gray-400/20 rounded-xl h-[55px] flex-row items-center justify-between mb-1">
                <IconButton
                  icon="cash-plus"
                  iconColor="white"
                  size={40}
                  animated
                />
                <View className="flex-1 flex-row justify-between ml-2">
                  <View className="flex-col">
                    <Line>Transfer</Line>
                    <Line>19.04.2025</Line>
                  </View>
                  <Line className="pr-5">100.00 USD</Line>
                </View>
              </View>

            </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      
      </LinearGradient>
    </>
    
  );
}