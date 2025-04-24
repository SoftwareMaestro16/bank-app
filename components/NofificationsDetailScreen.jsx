import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Line } from './Line';
import '../global.css'
export default function NotificationDetailScreen({ route }) {
  const { date, content } = route.params;

  return (
    
    <LinearGradient
      colors={['#171717', '#0a0a0a', '#0a0a0a', '#0a0a0a', '#171717']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-lg mb-1 text-gray-500">{date}</Text>
        <Line className="text-xl">
          {content}
        </Line>
        <Line className="text-right mt-3 text-xl text-gray-200">Kind regards, FinBank</Line>
      </ScrollView>
    </LinearGradient>
  );
}