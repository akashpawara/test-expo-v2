import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {LoginScreen} from '../screens/LoginScreen'
import {SplashScreen} from '../screens/SplashScreen'
import {MyClassifiedScreen} from '../screens/MyClassifiedScreen'
import { HomeScreen } from '../screens/HomeScreen';
import {TermsScreen} from '../screens/TermsScreen'
import {TabScreen} from '../screens/ItemScreen/TabScreen'
import {ProductsScreen} from '../screens/ProductsScreen/ProductsScreen';
import { NewClassifiedScreen } from '../screens/NewClassifiedScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef()


const NavigationTab = () =>{
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor='#ffffff'
    inactiveColor='#E0E1E4'
    barStyle = {{backgroundColor:'#000000', borderRadius: 120}}>
      <Tab.Screen barStyle name="MyClassified" component={MyClassifiedScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Product" component={ProductsScreen} />
    </Tab.Navigator>
  );
}

export const Navigation = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Dashboard" component={NavigationTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Splash" component={SplashScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tab" component={TabScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={ProductsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewClassified" component={NewClassifiedScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const navigate = (screenName) => {
  navigationRef.navigate(screenName);
};
