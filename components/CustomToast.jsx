import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import '../global.css'

const CustomToast = ({ text1, text2 }) => (
    <View className="mt-10 bg-[#1c1c1c] border-l-4 border-white rounded-lg px-4 py-3 mx-2 max-w-[65vw] z-10" style={{
      backgroundColor: '#1c1c1c',
      padding: 10,
      borderRadius: 8,
      zIndex: 9999,
      elevation: 9999,
    }}>
      <Text className="text-white text-base font-bold mb-1">{text1}</Text>
      <Text className="text-white text-md">{text2}</Text>
    </View>
);

export default CustomToast;