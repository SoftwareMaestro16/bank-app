import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import AppNavigator from './navigation/AppNavigator';
import CustomToast from './components/CustomToast';
import { useEffect, useCallback } from 'react';
import Toast from 'react-native-toast-message';
import { useNetInfo } from '@react-native-community/netinfo';
import './global.css';

SplashScreen.preventAutoHideAsync();

const toastConfig = {
  custom: ({ text1, text2 }) => (
    <CustomToast text1={text1} text2={text2} />
  ),
};

export default function App() {
  const netInfo = useNetInfo();

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

      await new Promise(resolve => setTimeout(resolve, 1000));
      await SplashScreen.hideAsync();
    } catch (e) {
      console.warn(e);
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

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AppNavigator />
        <Toast config={toastConfig} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
});