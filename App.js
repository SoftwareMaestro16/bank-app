import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import CustomToast from './components/CustomToast';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { useNetInfo } from '@react-native-community/netinfo';
import './global.css';

const toastConfig = {
  custom: ({ text1, text2 }) => (
    <CustomToast text1={text1} text2={text2} />
  ),
};

export default function App() {
  const netInfo = useNetInfo();

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
      {/* <StatusBar animated barStyle="light-content" backgroundColor="#ffffff" /> */}
      <AppNavigator />
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
}