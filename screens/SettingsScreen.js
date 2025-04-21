import { Text, View, TouchableOpacity, StatusBar, Image, Linking, SafeAreaView, Modal, Pressable, Platform } from 'react-native';
import { Line } from '../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';

export default function SettingsScreen({ navigation }) {
  const [exitModalVisible, setExitModalVisible] = useState(false);

  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;


  return (
    <>
      <StatusBar animated barStyle="light-content" backgroundColor="#0a0a0a" />      
      
      <LinearGradient
        colors={['#171717', '#0a0a0a', '#0a0a0a', '#0a0a0a', '#171717']}  
        style={{ flex: 1 }}  
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}  
      >
         <SafeAreaView style={{ flex: 1, paddingTop}}>
        <View className="flex-1 justify-between p-6">
          <View className="mt-5 py-1 px-1 flex items-start justify-start gap-2">  
          <TouchableOpacity 
              className="flex-row items-center gap-1 w-full border-b border-white"
              onPress={() => navigation.navigate('Profile')}
            >
              <IconButton
                    icon="account-circle"
                    iconColor='white'
                    size={29}
                    style={{ margin: 0 }}
                    onPress={() => console.log('Pressed')}
                />
              <Line className="text-2xl">Profile</Line>
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center gap-1 w-full border-b border-white"
              onPress={() => navigation.navigate('Notifications')}
            >
              <IconButton
                    icon="bell-badge"
                    iconColor='white'
                    size={29}
                    style={{ margin: 0 }}
                    onPress={() => console.log('Pressed')}
                />
              <Line className="text-2xl">Notifications</Line>
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center gap-1 w-full border-b border-white"
              onPress={() => navigation.navigate('About')}
            >
              <IconButton
                    icon="information-outline"
                    iconColor='white'
                    size={29}
                    style={{ margin: 0 }}
                    onPress={() => console.log('Pressed')}
                />
              <Line className="text-2xl">About</Line>
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center gap-1 w-full border-b border-white"
              onPress={() => navigation.navigate('About')}
            >
              <IconButton
                    icon="finance"
                    iconColor='white'
                    size={29}
                    style={{ margin: 0 }}
                    onPress={() => console.log('Pressed')}
                />
              <Line className="text-2xl">Currency Conversion</Line>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center gap-1 w-full"
              onPress={() => setExitModalVisible(true)} 
            >
              <IconButton
                icon="exit-run"
                iconColor="white"
                size={29}
                style={{ margin: 0 }}
              />
              <Line className="text-2xl text-white">Exit</Line>
            </TouchableOpacity>

            <Modal
              transparent
              animationType="fade"
              visible={exitModalVisible}
              onRequestClose={() => setExitModalVisible(false)}
            >
            <View className="flex-1 justify-center items-center bg-black/50">
              <View className="bg-white p-6 rounded-lg w-[77vw] h-[150px] shadow-lg flex justify-between">
                <Text className="text-xl font-semibold text-black">
                  Are you sure you want to exit?
                </Text>

                <View className="flex-row justify-end gap-4 mt-auto">
                  <Pressable
                    className="px-5 py-2 rounded bg-gray-100 border border-black"
                    onPress={() => setExitModalVisible(false)}
                  >
                    <Text className="text-black">Cancel</Text>
                  </Pressable>

                  <Pressable
                    className="px-5 py-2 rounded bg-black"
                    onPress={() => {
                      console.log('Confirmed exit');
                      setExitModalVisible(false);
                    }}
                  >
                    <Text className="text-white">Confirm</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          </View>

          <View className="mb-7">
            <Line className="text-center text-xl">Support Service:</Line>
            <View className="flex-row justify-center gap-16 mt-5">
              
              <TouchableOpacity onPress={() => Linking.openURL('https://shrbk.dev')}>
                <Image
                  source={require('../assets/images/icons/global.png')} 
                  style={{ width: 45, height: 45 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://t.me/SoftwareMaestro')}>
                <Image
                  source={require('../assets/images/icons/telegram.png')} 
                  style={{ width: 45, height: 45 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

            </View>
          </View>
        </View>

        </SafeAreaView>
      </LinearGradient>
    </>
  );
}