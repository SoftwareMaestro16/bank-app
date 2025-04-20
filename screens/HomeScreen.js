import { Text, View, TouchableOpacity, Pressable, StatusBar, Platform, SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import { Line } from '../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
  const [cardNumberVisibility, setCardNumberVisibility] = useState(false);

  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

  function changeCardVisibility() {
    setCardNumberVisibility(prev => !prev);
  }

  const cards = [
    { id: '1', logo: require('../assets/images/cards/mastercard.png'), type: 'mastercard', number: '••• 9144', balance: '145.34 USD' },
    { id: '2', logo: require('../assets/images/cards/visa.png'), type: 'visa', number: '••• 5678', balance: '1575.21 USD' },
  ];

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

          {/* 2 buttons */}

          <View className="mt-4 px-6 justify-between items-center flex-row">
            <Pressable onPress={() => navigation.navigate('Profile')}>
                <Image
                    source={require('../assets/images/icons/profile.png')} 
                    style={{ width: 35, height: 35 }}
                    resizeMode="contain"
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Notifications')}>
                <Image
                    source={require('../assets/images/icons/notifications.png')} 
                    style={{ width: 32, height: 32 }}
                    resizeMode="contain"
                />
            </Pressable>
           
          </View>

          {/* card */}

          <View className="bg-white w-[92vw] min-h-[170px] h-[23vh] mt-7 mx-auto flex justify-between rounded-2xl py-5 px-7">
            <View className="flex flex-row items-center justify-between w-full">
                <View className='flex-row items-center gap-1'>
                    <Image
                        source={require('../assets/images/finbank-logo.jpg')} 
                        style={{ width: 24, height: 24 }}
                        resizeMode="contain"
                    />
                    <Text className="text-2xl font-bold">FinBank</Text>
                </View>
                
                <Text className="text-2xl font-semibold">mastercard</Text>
            </View>
            <View>
                <Text className="text-left text-3xl mb-10 font-semibold">145.34 USD</Text>
            </View>
            <View className="flex flex-row items-center justify-between w-full">
                <View className="flex-row items-center gap-2">
                    <Text className="text-lg font-medium">
                        {cardNumberVisibility ? '5397 3812 4834 9144' : '••• 9144'}
                    </Text>

                    <Pressable onPress={changeCardVisibility}>
                        <Image
                        source={
                            cardNumberVisibility
                            ? require('../assets/images/eye-no.jpg') 
                            : require('../assets/images/eye-yes.jpg') 
                        }
                        style={{ width: 18, height: 18 }}
                        resizeMode="contain"
                        />
                    </Pressable>
                </View>
                    <Image
                        source={require('../assets/images/cards/mastercard.png')} 
                        style={{ width: 35, height: 35 }}
                        resizeMode="contain"
                    />
                </View>
          </View>

          {/* transfers */}

          <View className="flex-row justify-center mt-7 gap-8 items-center">
            <View className="flex-col items-center gap-2">
                <View className="w-10 h-10 p-9 rounded-full bg-gray-200/20 justify-center items-center">
                <Image
                    source={require('../assets/images/card-actions/transfer.png')} 
                    style={{ width: 37, height: 37 }}
                    resizeMode="contain"
                />  
                </View>
                <Line className="text-xl">Transfer</Line>
            </View>
            <View className="flex-col items-center gap-2">
                <View className="w-10 h-10 p-9 rounded-full bg-gray-200/20 justify-center items-center">
                <Image
                    source={require('../assets/images/card-actions/p2p.png')} 
                    style={{ width: 37, height: 37 }}
                    resizeMode="contain"
                />  
                </View>
                <Line className="text-xl">P2P</Line>
            </View>
            <View className="flex-col items-center gap-2">
                <View className="w-10 h-10 p-9 rounded-full bg-gray-200/20 justify-center items-center">
                <Image
                    source={require('../assets/images/card-actions/topup.png')} 
                    style={{ width: 37, height: 37 }}
                    resizeMode="contain"
                />  
                </View>
                <Line className="text-xl">Top Up</Line>
            </View>
            <View className="flex-col items-center gap-2">
                <View className="w-10 h-10 p-9 rounded-full bg-gray-200/20 justify-center items-center">
                <Image
                    source={require('../assets/images/card-actions/invoice.png')} 
                    style={{ width: 37, height: 37 }}
                    resizeMode="contain"
                />  
                </View>
                <Line className="text-xl">Invoice</Line>
            </View>
            
          </View>

          <ScrollView className="flex-1">

            {/* cards */}

            <View className="bg-gray-950 w-[92vw] mx-auto rounded-2xl mt-3 p-2">
                <FlatList
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="bg-gray-100 p-2.5 px-3 mb-4 rounded-lg shadow-md flex-row items-center">
                    <Image source={item.logo} style={{ width: 40, height: 40, marginRight: 15 }} />
                    
                    <View>
                        <View className='flex-row gap-1 items-center'>
                        <Text className="text-lg font-bold">{item.type}</Text>
                        <Text className="text-md font-bold text-gray-500">{item.number}</Text>
                        </View>
                        <Text className="text-sm text-gray-600">{item.balance}</Text>
                    </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                />
                <TouchableOpacity 
                    className="w-[90vw] py-3 rounded-xl border border-white" 
                    onPress={() => console.log('pressed')}
                >
                <Line className=" text-center text-lg">Add Card +</Line>
                </TouchableOpacity> 
            </View>

            {/* activities */}
            
            <View className="flex-row flex-wrap justify-center gap-4 px-4 mt-3 mb-6">
                <Image
                source={require('../assets/images/activities/deposit.png')}
                className="w-[30%] aspect-square rounded-xl"
                resizeMode="contain"
                />
                <Image
                source={require('../assets/images/activities/converter.png')}
                className="w-[30%] aspect-square rounded-xl"
                resizeMode="contain"
                />
                <Image
                source={require('../assets/images/activities/loan.png')}
                className="w-[30%] aspect-square rounded-xl"
                resizeMode="contain"
                />
            </View>
            </ScrollView>
          
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}