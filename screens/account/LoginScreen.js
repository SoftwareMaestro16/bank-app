import { Text, View, TouchableOpacity, TextInput, Linking, StatusBar, SafeAreaView, Platform } from 'react-native';
import { Line } from '../../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation, setIsLoggedIn }) {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Login button pressed', { email, password });

    if (!email || !password) {
      alert('Please fill in all fields.');
      console.log('Validation failed: Missing fields');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      console.log('Validation failed: Invalid email format');
      return;
    }

    try {
      console.log('Sending login request to server...');
      const response = await axios.post('https://bank-server-pq6u.onrender.com/auth/login', {
        email,
        password,
      });

      console.log('Server response:', response.data);

      if (response.status === 200) {
        await AsyncStorage.setItem('authToken', response.data.token);
        console.log('Token stored in AsyncStorage');

        setIsLoggedIn(true);

        alert('Login successful!');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server error response:', error.response.data);
        const errorMessage = error.response.data.errors
          ? error.response.data.errors.map(err => err.msg).join(', ')
          : error.response.data.message || 'Login failed.';
        alert(errorMessage);
      } else {
        console.error('Error during login:', error.message);
        alert('An error occurred during login. Please check your network connection.');
      }
    }
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
        <SafeAreaView style={{ flex: 1, paddingTop }}>
          <View className="flex-1 justify-center items-center px-5">
            <Line className="text-3xl mb-5">Welcome Back!</Line>
            <TextInput
              className="border w-full bg-gray-200 rounded-lg p-3 mb-4"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              className="border w-full bg-gray-200 rounded-lg p-3 mb-4"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              className="bg-white rounded-lg px-6 py-3 mt-4"
              onPress={handleLogin}
            >
              <Text className="text-black text-2xl text-center w-[80vw]">Login</Text>
            </TouchableOpacity>
            <View className="p-3 items-center w-full justify-between flex-row">
              <Text onPress={() => navigation.navigate('Register')} className="text-xl text-gray-400 mb-5">No Account?</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://t.me/SoftwareMaestro')}>
                <Text className="text-xl text-gray-400 mb-5">Support</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}