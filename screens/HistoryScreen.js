import { Text, View, StatusBar, ScrollView, SafeAreaView, Platform, ActivityIndicator } from 'react-native';
import { Line } from '../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton } from 'react-native-paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen({ navigation }) {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        navigation.navigate('Login');
        return;
      }

      const response = await axios.get('https://bank-server-pq6u.onrender.com/transactions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = Array.isArray(response.data) ? response.data : [];
      setTransactions(data);
    } catch (error) {
      if (error.response?.status === 401) {
        navigation.navigate('Login');
      } else {
        setTransactions([]); 
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const getIconForTransactionType = (type) => {
    return type === 'received' ? 'cash-plus' : 'cash-minus';
  };

  return (
    <>
      <StatusBar animated barStyle="light-content" backgroundColor="#0a0a0a" />
      <LinearGradient
        colors={['#171717', '#0a0a0a', '#0a0a0a', '#0a0a0a', '#171717']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <SafeAreaView style={{ flex: 1, paddingTop }}>
          <View className="mx-auto">
            <Line className="text-center mt-3 text-2xl border-b w-[92vw] border-b-white/30 pb-2 mb-7">Transactions History</Line>
            {loading ? (
              <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#ffffff" />
                <Text className="text-white text-lg mt-4">Loading transactions...</Text>
              </View>
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                <View className="flex-col">
                  {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                      <View
                        key={transaction._id.toString()}
                        className="bg-gray-400/20 rounded-xl h-[55px] flex-row items-center justify-between mb-1"
                      >
                        <IconButton
                          icon={getIconForTransactionType(transaction.type)}
                          iconColor="white"
                          size={40}
                          animated
                        />
                        <View className="flex-1 flex-row justify-between ml-2">
                          <View className="flex-col">
                            <Line>{transaction.fromOrTo}</Line>
                            <Line>{new Date(transaction.date).toLocaleDateString()}</Line>
                          </View>
                          <Line className="pr-5">
                            {transaction.type === 'sent' ? '-' : '+'}{transaction.amount} USD
                          </Line>
                        </View>
                      </View>
                    ))
                  ) : (
                    <Text className="text-white mt-5 text-center text-lg">No transactions available</Text>
                  )}
                </View>
              </ScrollView>
            )}
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}