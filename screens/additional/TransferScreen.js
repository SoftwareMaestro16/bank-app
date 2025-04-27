import { Text, View, TouchableOpacity, StatusBar, ScrollView, Image, TextInput } from 'react-native';
import { Line } from '../../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TransferScreen({ userData }) {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');

    const formatCardNumber = (cardNumber) => cardNumber.replace(/\s/g, ''); 

    const handleTransfer = async () => {
        const formattedRecipient = formatCardNumber(recipient);

        if (!/^\d{16}$/.test(formattedRecipient)) {
            alert('Invalid card number. Please enter 16 digits.');
            return;
        }

        const senderCard = userData?.userCards?.cards?.[0]; // Use the 0th index card
        if (!senderCard) {
            alert('No sender card available.');
            return;
        }

        if (parseFloat(amount) > senderCard.balance) {
            alert('Insufficient balance. Please enter a valid amount.');
            return;
        }

        try {
            const token = await AsyncStorage.getItem('authToken');
            if (!token) {
                alert('Please log in first.');
                return;
            }

            await axios.post(
                'https://bank-server-pq6u.onrender.com/transfer',
                {
                    amount,
                    fromCardNumber: senderCard.cardNumber,
                    toCardNumber: formattedRecipient,  
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert('Transfer successful!');
            setAmount(''); 
            setRecipient(''); 
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('An error occurred. Please try again.');
            }
        }
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
            <View className="flex justify-between p-6">
                <View className="mt-28">
                    <TextInput
                    className="border w-full bg-gray-200 rounded-lg p-3 mb-4"
                    placeholder="Card Number (XXXX XXXX XXXX XXXX)"
                    value={recipient}
                    onChangeText={setRecipient}
                    />
                    <TextInput
                    className="border w-full bg-gray-200 rounded-lg p-3 mb-4"
                    placeholder="Amount in USD"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                    />
                    <TouchableOpacity
                        className="w-[90vw] py-3 rounded-xl border border-white"
                        onPress={handleTransfer}
                    >
                        <Line className="text-center text-lg">Transfer</Line>
                    </TouchableOpacity>
                </View>
                
            </View>
            </LinearGradient>
        </>
    );
}