import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 70,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
        tabBarActiveTintColor: '#1d4ed8', 
        tabBarInactiveTintColor: '#6b7280', 
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => {

            const localIconSource = focused // local
                ? require('../assets/images.png') // active
                : require('../assets/favicon.png'); // !== active

            const urlIconSource = { // url
                uri: focused
                ? 'https://atlas-content-cdn.pixelsquid.com/stock-images/usd-symbol-dollar-sign-VRZr0Q7-600.jpg' // active
                : 'https://atlas-content-cdn.pixelsquid.com/stock-images/usd-symbol-dollar-sign-VRZr0Q7-600.jpg', // !== active
            };

            return (
                <Image
                source={localIconSource} // Local IMG
                // source={urlIconSource} // URL
                style={{
                    width: 28, 
                    height: 28,
                    // tintColor: focused ? '#1d4ed8' : '#6b7280', 
                }}
                />
            );
            },
        }}
        />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// without tab

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import SettingsScreen from '../screens/SettingsScreen';

// const Stack = createNativeStackNavigator();

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
//         <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
//         <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }