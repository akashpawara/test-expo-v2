import React from 'react';
import {Image, View} from 'react-native';

export const Dashboard = () => {
    return (
      <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
            source={require("../assets/images/profileIcon.png")}
            resizeMode="contain"
            style={{ width: 200, height: 80}}
          />
        </View>
      </>
    );
  };