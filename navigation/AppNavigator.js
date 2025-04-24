import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ActivityIndicator, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/additional/ProfileScreen';
import NotificationsScreen from '../screens/additional/NotificationsScreen';
import AboutScreen from '../screens/additional/AboutScreen';
import CardInfoScreen from '../screens/additional/CardInfoScreen';
import NotificationDetailScreen from '../components/NofificationsDetailScreen';
import RegisterScreen from '../screens/account/RegisterScreen';
import LoginScreen from '../screens/account/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs({ setIsLoggedIn, userData }) {
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
      >
        {(props) => <HomeScreen {...props} userData={userData} />}
      </Tab.Screen>
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
      >
        {(props) => <SettingsScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function AppNavigator({ isLoggedIn, setIsLoggedIn, userData }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'MainTabs' : 'Login'}
        screenOptions={{
          headerBackTitleVisible: false,
          headerBackTitle: '⠀⠀⠀',
          headerStyle: { backgroundColor: '#141414' },
          headerTintColor: '#fff',
        }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="MainTabs"
              options={{ title: '⠀⠀⠀', headerShown: false }}
            >
              {(props) => <MainTabs {...props} setIsLoggedIn={setIsLoggedIn} userData={userData} />}
            </Stack.Screen>
            <Stack.Screen
              name="Profile"
              options={{ title: 'Profile', headerTitleAlign: 'center' }}
            >
              {(props) => <ProfileScreen {...props} userData={userData} />}
            </Stack.Screen>
            <Stack.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{ title: 'Notifications', headerTitleAlign: 'center' }}
            />
            <Stack.Screen
              name="About"
              component={AboutScreen}
              options={{ title: 'About', headerTitleAlign: 'center' }}
            />
            <Stack.Screen
              name="Card Info"
              component={CardInfoScreen}
              options={{ title: 'Card Info', headerTitleAlign: 'center' }}
            />
            <Stack.Screen
              name="NotificationDetail"
              component={NotificationDetailScreen}
              options={{ title: 'Notification', headerTitleAlign: 'center', headerBackTitle: '⠀⠀⠀' }}
            />
          </> 
        ) : (
          <>
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
            >
              {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen
              name="Register"
              options={{ headerShown: false }}
            >
              {(props) => <RegisterScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}