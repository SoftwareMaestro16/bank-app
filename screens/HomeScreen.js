import { Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl mb-4">Welcome to the Home Screen!</Text>
      <TouchableOpacity
        className="bg-red-500 p-3 rounded"
        onPress={() => navigation.navigate('Profile')}
      >
        <Text className="text-white text-3xl">Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-green-500 p-3 rounded mt-4"
        onPress={() => navigation.navigate('Settings')}
      >
        <Text className="text-white">Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}