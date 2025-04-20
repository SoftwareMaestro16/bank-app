import { View, TouchableOpacity, StatusBar, Image, Linking, SafeAreaView } from 'react-native';
import { Line } from '../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SettingsScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar animated barStyle="light-content" backgroundColor="#0a0a0a" />      
      
      <LinearGradient
        colors={['#171717', '#0a0a0a', '#0a0a0a', '#0a0a0a', '#171717']}  
        style={{ flex: 1 }}  
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}  
      >
         <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
        <View className="flex-1 justify-between p-6">
          <View className="mt-5 py-1 px-1 flex items-start justify-start gap-2">  
            <TouchableOpacity 
              className="flex-row items-center gap-1 py-2 w-full border-b border-white"
              onPress={() => navigation.navigate('Profile')}
            >
              <Image
                source={require('../assets/images/icons/profile.png')} 
                style={{ width: 29, height: 29 }}
                resizeMode="contain"
              />
              <Line className="text-2xl ml-2">Profile</Line>
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center gap-1 py-2 w-full border-b border-white"
              onPress={() => navigation.navigate('Notifications')}
            >
              <Image
                source={require('../assets/images/icons/notifications.png')} 
                style={{ width: 29, height: 29 }}
                resizeMode="contain"
              />
              <Line className="text-2xl ml-2">Notifications</Line>
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center gap-1 py-2 w-full border-b border-white"
              onPress={() => navigation.navigate('About')}
            >
              <Image
                source={require('../assets/images/icons/info.png')} 
                style={{ width: 29, height: 29 }}
                resizeMode="contain"
              />
              <Line className="text-2xl ml-2">About</Line>
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center gap-1 py-2 w-full border-b border-white"
              onPress={() => navigation.navigate('Profile')}
            >
              <Image
                source={require('../assets/images/icons/convert.png')} 
                style={{ width: 29, height: 29 }}
                resizeMode="contain"
              />
              <Line className="text-2xl ml-2">Currency Conversion</Line>
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center gap-1 py-2 w-full "
              onPress={() => navigation.navigate('Profile')}
            >
              <Image
                source={require('../assets/images/icons/exit.png')} 
                style={{ width: 29, height: 29 }}
                resizeMode="contain"
              />
              <Line className="text-2xl ml-2">Exit</Line>
            </TouchableOpacity>


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