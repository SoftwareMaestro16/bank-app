import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import AppNavigator from './navigation/AppNavigator';
import CustomToast from './components/CustomToast';
import { useEffect, useCallback, useState } from 'react';
import Toast from 'react-native-toast-message';
import { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import './global.css';

SplashScreen.preventAutoHideAsync();

const toastConfig = {
  custom: ({ text1, text2 }) => (
    <CustomToast text1={text1} text2={text2} />
  ),
};

export default function App() {
  const netInfo = useNetInfo();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onAppReady = useCallback(async () => {
    try {
      const images = [
        require('./assets/images/payments/1-1.png'),
        require('./assets/images/payments/1-2.png'),
        require('./assets/images/payments/1-3.png'),
        require('./assets/images/payments/2-1.png'),
        require('./assets/images/payments/2-2.png'),
        require('./assets/images/payments/2-3.png'),
        require('./assets/images/payments/3-1.png'),
        require('./assets/images/payments/3-2.png'),
        require('./assets/images/payments/3-3.png'),
        require('./assets/images/payments/4-1.png'),
        require('./assets/images/payments/4-2.png'),
        require('./assets/images/payments/4-3.png'),
        require('./assets/images/activities/converter.png'),
        require('./assets/images/activities/deposit.png'),
        require('./assets/images/activities/loan.png'),
        require('./assets/images/card-actions/invoice.png'),
        require('./assets/images/card-actions/p2p.png'),
        require('./assets/images/card-actions/topup.png'),
        require('./assets/images/card-actions/transfer.png'),
      ];

      await Promise.all(
        images.map(image => Asset.fromModule(image).downloadAsync())
      );

      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        const response = await axios.get('https://bank-server-pq6u.onrender.com/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          setUserData(response.data);
          console.log('User data:', response.data);
  
          setIsLoggedIn(true);
        } else {
          await AsyncStorage.removeItem('authToken');
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      if (error.response?.status === 403) {
        await AsyncStorage.removeItem('authToken');
        setIsLoggedIn(false);
      } else {
        console.error('Error fetching user data:', error.message);
      }
    } finally {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await SplashScreen.hideAsync();
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    onAppReady();
  }, [onAppReady]);

  useEffect(() => {
    if (netInfo.isConnected === false) {
      Toast.show({
        type: 'custom',
        text1: 'No Internet Connection!',
        text2: 'Please check your network settings.',
      });
    } else if (netInfo.isConnected === true) {
      Toast.show({
        type: 'custom',
        text1: 'Connected!',
        text2: 'You are online.',
      });
    }
  }, [netInfo.isConnected]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a0a' }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <>
      {/* <StatusBar animated barStyle="light-content" backgroundColor="#0a0a0a" /> */}
      <SafeAreaProvider>
      <View style={styles.container}>
        <AppNavigator
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
        />
        <Toast config={toastConfig} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
});