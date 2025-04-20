import { Text, View, TouchableOpacity } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl mb-4">Settings Screen</Text>
      <TouchableOpacity
        className="bg-purple-700 p-3 rounded"
        onPress={() => navigation.navigate('Home')}
      >
        <Text className="text-white">Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}