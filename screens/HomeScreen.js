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
  ActivityIndicator,
} from 'react-native';
import { Line } from '../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton } from 'react-native-paper';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation, userData, setUserData }) {
  const [cardNumberVisibility, setCardNumberVisibility] = useState(false);
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

  async function updateData() {
    try {
      const authToken = await AsyncStorage.getItem('authToken'); 
      if (!authToken) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch('https://bank-server-pq6u.onrender.com/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`, 
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const updatedData = await response.json();
      setUserData(updatedData); 
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  function changeCardVisibility() {
    setCardNumberVisibility((prev) => !prev);
  }

  function formatCardNumber(cardNumber) {
    return cardNumber.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  if (!userData || !userData.userCards?.cards?.length) {
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
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Notifications')}>
              <IconButton
                icon="bell-badge"
                iconColor='white'
                size={37}
                animated
              />
            </Pressable>
            
          </View>
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#ffffff" />
            <Text className="text-white text-lg mt-4">Loading card data...</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
      </>
    );
  }

  const card = userData.userCards.cards[0];

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
              />
            </Pressable>
            <View className="flex-row">
            <Pressable onPress={updateData}>
              <IconButton
                icon="reload"
                iconColor='white'
                size={37}
                animated
                className="ml-6"
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Notifications')}>
              <IconButton
                icon="bell-badge"
                iconColor='white'
                size={37}
                animated
              />
            </Pressable>
            </View>
            
          </View>

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
                <Text className="text-2xl font-semibold">{card.type.toLowerCase()}</Text>
              </View>
              <View>
                <Text className="text-left text-3xl mb-2 xs:mb-7 font-semibold">{card.balance} USD</Text>
              </View>
              <View className="flex flex-row items-center justify-between w-full">
                <View className="flex-row items-center gap-2">
                  <Text className="text-lg font-medium">
                    {cardNumberVisibility ? formatCardNumber(card.cardNumber) : '••• ' + card.cardNumber.slice(-4)}
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
                  source={
                    card.type.toLowerCase() === 'visa'
                      ? require('../assets/images/cards/visa.png')
                      : require('../assets/images/cards/mastercard.png')
                  }
                  style={{ width: 35, height: 35 }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>

          <View className="flex-row justify-center mt-12 xs:mt-6 gap-8 items-center">
            
            <View className="flex-col items-center gap-2">
              <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
                <View className="w-10 h-10 p-9 rounded-full bg-gray-200/20 justify-center items-center">
                <Image
                  source={require('../assets/images/card-actions/transfer.png')}
                  style={{ width: 37, height: 37 }}
                  resizeMode="contain"
                />
               </View>
               <Line className="text-lg">Transfer</Line>
              </TouchableOpacity>
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
            <View className="bg-gray-950 w-[92vw] mx-auto rounded-2xl mt-3 p-2">
              {userData.userCards.cards.map((item, index) => (
                <View
                  key={index}
                  className="bg-gray-100 p-2.5 px-3 mb-4 rounded-lg shadow-md flex-row items-center"
                >
                  <Image
                    source={
                      item.type.toLowerCase() === 'visa'
                        ? require('../assets/images/cards/visa.png')
                        : require('../assets/images/cards/mastercard.png')
                    }
                    style={{ width: 40, height: 40, marginRight: 15 }}
                  />
                  <View>
                    <View className="flex-row gap-1 items-center">
                      <Text className="text-lg font-bold">{(item.type).toLowerCase()}</Text>
                      <Text className="text-md font-bold text-gray-500">
                        ••• {item.cardNumber.slice(-4)}
                      </Text>
                    </View>
                    <Text className="text-md text-gray-600">{item.balance} USD</Text>
                  </View>
                </View>
              ))}
              <TouchableOpacity
                className="w-[90vw] py-3 rounded-xl border border-white"
                onPress={() => console.log('Add card pressed')}
              >
                <Line className="text-center text-lg">Add Card +</Line>
              </TouchableOpacity>
            </View>

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