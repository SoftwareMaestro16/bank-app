import { Text, TextInput, View, Linking, TouchableOpacity, StatusBar, SafeAreaView, Platform } from 'react-native';
import { Line } from '../../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation, setIsLoggedIn }) {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    console.log('Register button pressed');

    if (!firstName || !lastName || !phone || !login || !password || !address || !confirmPassword) {
      alert('Please fill in all fields.');
      console.log('Validation failed: Missing fields');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(login)) {
      alert('Please enter a valid email address.');
      console.log('Validation failed: Invalid email format');
      return;
    }

    if (!/^\+\d{3,15}$/.test(phone)) {
      alert('Enter number in format: +XX XXX XXX');
      console.log('Validation failed: Invalid phone number format');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      console.log('Validation failed: Passwords do not match');
      return;
    }

    try {
      console.log('Sending registration request to server...');
      const response = await axios.post('https://bank-server-pq6u.onrender.com/auth/register', {
        firstName,
        lastName,
        phoneNumber: phone,
        email: login,
        password,
        address,
      });

      console.log('Server response:', response.data);

      if (response.status === 200) {
        await AsyncStorage.setItem('authToken', response.data.token);
        console.log('Token stored in AsyncStorage');
        setIsLoggedIn(true);

        alert('Registration successful!');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server error response:', error.response.data);
        const errorMessage = error.response.data.errors
          ? error.response.data.errors.map(err => err.msg).join(', ')
          : error.response.data.message || 'Registration failed.';
        alert(errorMessage);
      } else {
        console.error('Error during registration:', error);
        alert('An error occurred during registration. Please check your network connection.');
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
            <Line className="text-3xl mb-5">No Account?</Line>
            <View className="flex-row gap-1">
              <TextInput
                className="border w-[45vw] bg-gray-200 rounded-lg p-3 mb-4"
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                className="border w-[45vw] bg-gray-200 rounded-lg p-3 mb-4"
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
            <TextInput
              className="border w-full bg-gray-200 rounded-lg p-3 mb-4"
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
            <TextInput
              className="border w-full bg-gray-200 rounded-lg p-3 mb-4"
              placeholder="Email"
              value={login}
              onChangeText={setLogin}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              className="border w-full bg-gray-200 rounded-lg p-3 mb-4"
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              className="border w-full bg-gray-200 rounded-lg p-3 mb-4"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              className="border w-full bg-gray-200 rounded-lg p-3 mb-4"
              placeholder="Repeat Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              className="bg-white rounded-lg px-6 py-3 mt-4"
              onPress={handleRegister}
            >
              <Text className="text-black text-2xl text-center w-[80vw]">Register</Text>
            </TouchableOpacity>
            <View className="p-3 items-center w-full justify-between flex-row">
              <Text onPress={() => navigation.navigate('Login')} className="text-xl text-gray-400 mb-5">Have Account?</Text>
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