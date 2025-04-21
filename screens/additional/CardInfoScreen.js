import { Text, View, TouchableOpacity, StatusBar, ScrollView, Pressable, Image } from 'react-native';
import { Line } from '../../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import CustomToast from '../../components/CustomToast';
import { useState } from 'react';

const toastConfig = {
    custom: ({ text1, text2 }) => (
      <CustomToast text1={text1} text2={text2} />
    ),
};

export default function CardInfoScreen({  }) {
  const [CVVNumberVisibility, setCVVNumberVisibility] = useState(false);

  function changeCVVVisibility() {
    setCVVNumberVisibility((prev) => !prev);
  }

  const cardNumber = '5397 3812 4834 9144';

  const handleCopy = () => {
    Clipboard.setString(cardNumber);
    Toast.show({
        type: 'custom',
        text1: 'Successfully!',
        text2: 'Card number copied.',
    });
  };

  return (
    <>
      <StatusBar animated barStyle="light-content" backgroundColor="#0a0a0a" />      
      
      <LinearGradient
        colors={['#171717', '#0a0a0a', '#0a0a0a', '#0a0a0a', '#171717']}  
        style={{ flex: 1 }}  
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}  
      >
        <View>
            <Toast
                config={toastConfig}
                position="top"
                style={{ zIndex: 9999 }}
            />
        </View>
        <View className="p-2">
        <View className="flex mt-5 p-6 px-2 mx-auto items-center justify-center border border-white rounded-xl w-full">
            <View className="justify-center  items-center flex-col border-b border-b-white w-full"> 
                <Line className="text-2xl">
                    Card Number
                </Line>
                <View className="flex-row items-center">
                    <Line className="text-2xl mb-3">
                        5397 3812 4834 9144
                    </Line>

                    <IconButton
                        icon="content-copy"
                        iconColor='white'
                        size={24}
                        animated
                        onPress={() => console.log('Pressed')}
                        className="mx-auto m-0 mb-3 mr-5"
                        onPressIn={handleCopy}
                    />
               

                </View>
                
            </View>

            <ScrollView 
                showsVerticalScrollIndicator={false}   
                showsHorizontalScrollIndicator={false}
                horizontal={false} 
            >
                <View className="flex-col mt-1 w-full">
                    <View className="flex-row justify-between items-center w-full ">
                        <Line className="text-2xl">Type:</Line>
                        <Line className="font-semibold text-2xl mr-2">mastercard</Line>
                    </View>

                    <View className="flex-row justify-between items-centerw-full mt-1 ">
                        <Line className="text-2xl">Expires:</Line>
                        <Line className="font-semibold text-2xl mr-2">11/2028</Line>
                    </View>

                    <View className="flex-row justify-between items-center mt-1 w-full ">
                        <Line className="text-2xl">CVV:</Line>
                        <View className="flex-row items-center gap-2">
                            <Line className="text-2xl font-medium">
                            {CVVNumberVisibility ? '523' : '•••'}
                            </Line>
                            <Pressable onPress={changeCVVVisibility}>
                            <Image
                                source={
                                CVVNumberVisibility
                                    ? require('../../assets/images/white-eye.png')
                                    : require('../../assets/images/white-eye.png')
                                }
                                style={{ width: 26, height: 26 }}
                                resizeMode="contain"
                                className="mr-2"
                            />
                            </Pressable>
                        </View>
                    </View>

                    <View className="flex-row justify-between items-center mt-1 border-b  border-b-white">
                        <Line className="text-2xl">Balance:</Line>
                        <Line className="font-semibold text-2xl mr-2 mb-2">145.34 USD</Line>
                    </View>

                    <View className="flex-row justify-between items-center w-full mt-2">
                        <Line className="text-2xl">Receiver:</Line>
                        <Line className="font-semibold text-2xl mr-2">Eduard Kuzmin</Line>
                    </View>

                    <View className="flex-row justify-between items-center w-full mt-2">
                        <Line className="text-2xl">Fixal Code:</Line>
                        <Line className="font-semibold text-xl mr-2">2009005112378</Line>
                    </View>

                    <View className="flex-row justify-between items-center w-full mt-1 ">
                        <Line className="text-2xl">Bank:</Line>
                        <Line className="font-semibold text-2xl mr-2">FinBank</Line>
                    </View>

                    <View className="flex-row justify-between items-center w-full mt-1 ">
                        <Line className="text-2xl">BIC:</Line>
                        <Line className="font-semibold text-2xl mr-2">AGKNMF4R</Line>
                    </View>

                    <View className="flex-row justify-between items-center w-full mt-1 ">
                        <Line className="text-2xl">IBAN:</Line>
                        <Line className="font-semibold text-xl mr-2">CN92AG000000022693585308</Line>
                    </View>

                    <View className="flex-row justify-between items-center w-full mt-1 ">
                        <Line className="text-2xl">№ Account Number:</Line>
                        <Line className="font-semibold text-xl mr-2">22693585308</Line>
                    </View>

                    <View className="flex-row justify-between items-centerw-full mt-1 border-b  border-b-white">
                        <Line className="text-2xl">Currency:</Line>
                        <Line className="font-semibold text-2xl mr-2 mb-2">USD</Line>
                    </View>

                    <View className="flex-row justify-between items-center w-full mt-1 ">
                        <Line className="text-2xl">Correspondent:</Line>
                        <Line className="font-semibold text-xl mr-2">Bank of New York, USA</Line>
                    </View>

                    <View className="flex-row justify-between items-centerw-full mt-1 ">
                        <Line className="text-2xl">BIC/SWIFT:</Line>
                        <Line className="BIC/SWIFT text-2xl">AGKNMF4RXXX</Line>
                    </View>
                    
                </View>
            </ScrollView> 
           
                
                  
        </View>

        </View>
        
      </LinearGradient>
    </>
  );
}