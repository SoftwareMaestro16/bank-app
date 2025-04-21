import {
    Text,
    View,
    TouchableOpacity,
    Pressable,
    StatusBar,
    Platform,
    SafeAreaView,
    Image,
    ScrollView,
  } from 'react-native';
import { Line } from '../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { IconButton } from 'react-native-paper';
  
export default function HomeScreen({ navigation }) {
    const [cardNumberVisibility, setCardNumberVisibility] = useState(false);
  
    const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
  
    function changeCardVisibility() {
      setCardNumberVisibility((prev) => !prev);
    }
  
    const cards = [
      {
        id: '1',
        logo: require('../assets/images/cards/mastercard.png'),
        type: 'mastercard',
        number: '••• 9144',
        balance: '145.34 USD',
      },
      {
        id: '2',
        logo: require('../assets/images/cards/visa.png'),
        type: 'visa',
        number: '••• 5678',
        balance: '1575.21 USD',
      },
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
              <View className="px-4 justify-between items-center flex-row">
                <Pressable onPress={() => navigation.navigate('Profile')}>
                  <IconButton
                    icon="account-circle"
                    iconColor='white'
                    size={40}
                    animated
                    onPress={() => navigation.navigate('Profile')}
                />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Notifications')}>
                  <IconButton
                    icon="bell-badge"
                    iconColor='white'
                    size={37}
                    animated
                    onPress={() => navigation.navigate('Notifications')}
                />
                </Pressable>
              </View>
  
              {/* card */}
              <Pressable onPress={() => navigation.navigate('Card Info')}>
                <View className="bg-white w-[92vw] min-h-[185px] h-[23vh] xs:mt-2 mx-auto flex justify-between rounded-2xl py-5 px-7">
                    <View className="flex flex-row items-center justify-between w-full">
                    <View className="flex-row items-center gap-1">
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
                    <Text className="text-left text-3xl mb-2 xs:mb-7 font-semibold">145.34 USD</Text>
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
              </Pressable>       
  
              {/* transfers */}
              <View className="flex-row justify-center mt-12 xs:mt-6 gap-8 items-center">
                <View className="flex-col items-center gap-2">
                  <View className="w-10 h-10 p-9 rounded-full bg-gray-200/20 justify-center items-center">
                    <Image
                      source={require('../assets/images/card-actions/transfer.png')}
                      style={{ width: 37, height: 37 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Line className="text-lg">Transfer</Line>
                </View>
                <View className="flex-col items-center gap-2">
                  <View className="w-10 h-10 p-9 rounded-full bg-gray-200/20 justify-center items-center">
                    <Image
                      source={require('../assets/images/card-actions/p2p.png')}
                      style={{ width: 37, height: 37 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Line className="text-lg">P2P</Line>
                </View>
                <View className="flex-col items-center gap-2">
                  <View className="w-10 h-10 p-9 rounded-full bg-gray-200/20 justify-center items-center">
                    <Image
                      source={require('../assets/images/card-actions/topup.png')}
                      style={{ width: 37, height: 37 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Line className="text-lg">Top Up</Line>
                </View>
                <View className="flex-col items-center gap-2">
                  <View className="w-10 h-10 p-9 rounded-full bg-gray-200/20 justify-center items-center">
                    <Image
                      source={require('../assets/images/card-actions/invoice.png')}
                      style={{ width: 37, height: 37 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Line className="text-lg">Invoice</Line>
                </View>
              </View>
  
              <ScrollView showsVerticalScrollIndicator={false}>

              {/* cards */}
              <View className="bg-gray-950 w-[92vw] mx-auto rounded-2xl mt-3 p-2">
                {cards.map((item) => (
                  <View
                    key={item.id}
                    className="bg-gray-100 p-2.5 px-3 mb-4 rounded-lg shadow-md flex-row items-center"
                  >
                    <Image source={item.logo} style={{ width: 40, height: 40, marginRight: 15 }} />
                    <View>
                      <View className="flex-row gap-1 items-center">
                        <Text className="text-lg font-bold">{item.type}</Text>
                        <Text className="text-md font-bold text-gray-500">{item.number}</Text>
                      </View>
                      <Text className="text-sm text-gray-600">{item.balance}</Text>
                    </View>
                  </View>
                ))}
                <TouchableOpacity
                  className="w-[90vw] py-3 rounded-xl border border-white"
                  onPress={() => console.log('pressed')}
                >
                  <Line className="text-center text-lg">Add Card +</Line>
                </TouchableOpacity>
              </View>
  
              {/* activities */}
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ 
                gap: 1,     
                paddingHorizontal: 22,
            }}
            className="mt-3 mb-6"
            >
            <Image
                source={require('../assets/images/activities/deposit.png')}
                className="w-[100px] xs:w-[120px] aspect-square rounded-xl mr-4"
                resizeMode="contain"
            />
            <Image
                source={require('../assets/images/activities/converter.png')}
                className="w-[100px] xs:w-[120px] aspect-square rounded-xl mr-4"
                resizeMode="contain"
            />
            <Image
                source={require('../assets/images/activities/loan.png')}
                className="w-[100px] xs:w-[120px] aspect-square rounded-xl"
                resizeMode="contain"
            />
            </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </>
    );
}