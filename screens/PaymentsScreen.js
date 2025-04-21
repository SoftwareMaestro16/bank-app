import { Text, View, StatusBar, Platform, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import { Line } from '../components/Line';
import { LinearGradient } from 'expo-linear-gradient';

export default function PaymentsScreen({ navigation }) {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
  const { width } = Dimensions.get('window'); 
  const imageWidth = width * 0.93; 
  const imageHeight = imageWidth * 0.44; 

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
            <Line className="text-center mt-3 text-2xl border-b border-b-white/30 pb-2">Online Payments</Line>
            <ScrollView 
              showsVerticalScrollIndicator={false} 
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-col">
                <View>
                  <Line className="text-3xl mt-3 mb-3 ml-2 font-semibold">Utilities</Line>
                  <View className="flex-col gap-3">
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/1-1.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/1-2.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/1-3.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Line className="text-3xl mt-3 mb-3 ml-2 font-semibold">Mobile & Internet</Line>
                  <View className="flex-col gap-3">
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/2-1.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/2-2.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/2-3.png')} // Fixed typo in image path
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                  <Line className="text-3xl mt-3 mb-3 ml-2 font-semibold">Government Services</Line>
                  <View className="flex-col gap-3">
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/3-1.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/3-2.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/3-3.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                  <Line className="text-3xl mt-3 mb-3 ml-2 font-semibold">Transport & Parking</Line>
                  <View className="flex-col gap-3 mb-16">
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/4-1.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/4-2.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ borderRadius: 24, overflow: 'hidden' }}>
                      <Image
                        source={require('../assets/images/payments/4-3.png')}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </View>
              </View> 
            </ScrollView>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}