import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import {Navigation} from '../navigation/Navigation';
import { LoginScreen } from './LoginScreen';
import { useNavigation } from '@react-navigation/native';


export const SplashScreen = () => {
  
const navigation = useNavigation();
//   componentDidMount()

//   componentDidMount = () =>{
//     setTimeOut( () => {
//         navigate('Login');
//     }, 5000 );
// };

setTimeout(() => {
  navigation.navigate('Login');
}, 7000);
    return (
      <>
        <View
                style={{
                    flex: 1,
                    backgroundColor: '#000000'
                }}
            >
                <LottieView
                    source={require('../assets/images/splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                />
            </View>
      </>
    );
  };




