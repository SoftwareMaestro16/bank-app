import { Text, View, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl mb-4">Profile Screen</Text>
      <TouchableOpacity
        className="bg-pink-500 p-3 rounded w-[90vw]"
        onPress={() => navigation.navigate('Home')}
      >
        <Text className="text-white text-3xl text-center">Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}