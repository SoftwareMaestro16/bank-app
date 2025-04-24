import { Text, View, TouchableOpacity, StatusBar, Image, Button, ActivityIndicator } from 'react-native';
import { Line } from '../../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function ProfileScreen({ userData }) {

  return (
    <>
      <StatusBar animated barStyle="light-content" backgroundColor="#0a0a0a" />       
      <LinearGradient
        colors={['#171717', '#0a0a0a', '#0a0a0a', '#0a0a0a', '#171717']}  
        style={{ flex: 1 }}  
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}  
      >
        <View className="flex-1 justify-between p-6">
            <View className="mt-5 py-2 px-5 flex items-start justify-start border border-white rounded-lg">
                
                <View className="flex-row items-center gap-1 py-2 w-full border-b border-white">
                    <Image
                        source={require('../../assets/images/icons/profile.png')} 
                        style={{ width: 29, height: 29 }}
                        resizeMode="contain"
                    />
                    <Line className="text-2xl">{userData.firstName} {userData.lastName}</Line>
                </View>

                <View className="flex-row items-center gap-1 w-full py-2 border-b border-white">
                    <Image
                    
                        source={require('../../assets/images/icons/id.png')} 
                        style={{ width: 29, height: 29 }}
                        resizeMode="contain"
                    />
                    <Line className="text-xl">2009005112378</Line>
                </View>
                

                <View className="flex-row items-center gap-1 w-full py-2 border-b border-white">
                    <Image
                        source={require('../../assets/images/icons/country.png')} 
                        style={{ width: 29, height: 29 }}
                        resizeMode="contain"
                    />
                    <Line className="text-2xl">China, Guangzhou</Line>
                </View>

                <View className="flex-row items-center gap-1 w-full py-2 border-b border-white">
                    <Image
                        source={require('../../assets/images/icons/address.png')} 
                        style={{ width: 29, height: 29 }}
                        resizeMode="contain"
                    />
                    <Line className="text-md">{userData.address}</Line>
                </View>

                <View className="flex-row items-center gap-1 w-full mt-2 mb-1">
                    <Image
                        source={require('../../assets/images/icons/phone.png')} 
                        style={{ width: 29, height: 29 }}
                        resizeMode="contain"
                    />
                    <Line className="text-xl">{userData.phoneNumber}</Line>
                </View> 

            </View>

            <View className="mb-7">
                <TouchableOpacity 
                    className="w-[90vw] py-3 rounded-xl border border-white" 
                    onPress={() => console.log('pressed')}
                >
                <Line className=" text-center text-lg">Update Data</Line>
                </TouchableOpacity>            
            </View>
        </View>

        
      </LinearGradient>
    </>
  );
}