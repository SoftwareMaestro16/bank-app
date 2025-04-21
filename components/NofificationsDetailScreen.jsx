import { Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Line } from './Line';

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
        <Line className="text-lg mb-1 text-gray-400">{date}</Line>
        <Line className="text-xl">
          {content}
        </Line>
        <Line className="text-right mt-3 text-xl text-gray-200">Kind regards, FinBank</Line>
      </ScrollView>
    </LinearGradient>
  );
}