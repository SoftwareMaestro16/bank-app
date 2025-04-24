import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Line } from '../../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotificationScreen({ navigation }) {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        navigation.navigate('Login');
        return;
      }

      const response = await axios.get('https://bank-server-pq6u.onrender.com/notifications', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotifications(response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        navigation.navigate('Login');
      }
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <StatusBar animated barStyle="light-content" backgroundColor="#0a0a0a" />
      <LinearGradient
        colors={['#171717', '#0a0a0a', '#0a0a0a', '#0a0a0a', '#171717']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View className="p-6">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <TouchableOpacity
                  key={notif._id.toString()}
                  onPress={() =>
                    navigation.navigate('NotificationDetail', {
                      date: new Date(notif.date).toLocaleDateString(),
                      content: notif.message,
                    })
                  }
                  className="flex-col mt-2 border-b border-b-gray-300/20"
                >
                  <Text className="text-gray-500 text-lg">{new Date(notif.date).toLocaleDateString()}</Text>
                  <Line className="text-lg line-clamp-3 mb-1">{notif.message}</Line>
                </TouchableOpacity>
              ))
            ) : (
              <Text className="text-white text-center mt-5 text-lg">No notifications available</Text>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}