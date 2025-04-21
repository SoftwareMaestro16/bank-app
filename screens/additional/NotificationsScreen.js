import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Line } from '../../components/Line';
import { LinearGradient } from 'expo-linear-gradient';

export default function NotificationScreen({ navigation }) {

  const notifications = [
    {
      id: 1,
      date: '28 Feb, 16:47',
      content:
        'Dear Customer,\nWe attempted to process your recent payment, but it was declined due to insufficient funds in your account. Please ensure your balance is sufficient and try again.',
    },
    {
      id: 2,
      date: '1 Mar, 09:15',
      content:
        'Your subscription has been renewed successfully. Thank you for being with us.',
    },
    {
      id: 3,
      date: '2 Mar, 12:30',
      content:
        'Reminder: Your account password will expire soon. Please update it to maintain access.',
    },
  ];

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
            {notifications.map((notif) => (
              <TouchableOpacity
                key={notif.id}
                onPress={() =>
                  navigation.navigate('NotificationDetail', {
                    date: notif.date,
                    content: notif.content,
                  })
                }
                className="flex-col mt-2 border-b border-b-gray-300/20"
              >
                <Line className="text-gray-400 text-md">{notif.date}</Line>
                <Line className="text-lg line-clamp-3 mb-1">
                  {notif.content}
                </Line>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}