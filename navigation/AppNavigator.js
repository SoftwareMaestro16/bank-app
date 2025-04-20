import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/additional/ProfileScreen';
import NotificationsScreen from '../screens/additional/NotificationsScreen';
import AboutScreen from '../screens/additional/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#141414',
          borderTopWidth: 1,
          borderTopColor: '#1c1c1c',
          height: 70,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#b0b0b0',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/home-active.png')
                  : require('../assets/images/home-inactive.png')
              }
              style={{ width: 27, height: 27 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'History',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/history-active.png')
                  : require('../assets/images/history-inactive.png')
              }
              style={{ width: 27, height: 27 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Payments',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/pay-active.png')
                  : require('../assets/images/pay-inactive.png')
              }
              style={{ width: 29, height: 29 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/settings-active.png')
                  : require('../assets/images/settings-inactive.png')
              }
              style={{ width: 27, height: 27 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="⠀⠀"
        screenOptions={{
          headerBackTitleVisible: false, 
          headerBackTitle: '', 
          headerStyle: {
            backgroundColor: '#141414',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="⠀⠀" 
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false, 
            headerBackTitle: '', 
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            title: 'Notifications',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerBackTitle: '',
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: 'About',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerBackTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}