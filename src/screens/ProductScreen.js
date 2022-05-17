import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  StyleSheet
  } from 'react-native';
  import { commonStyles } from '../styles/commonStyles';
  import { Button } from 'react-native-paper';

  export const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../assets/images/a52.jpg")}
        />
        <View style={styles.infoContainer}>
        <Text style={styles.price}>₹25000</Text>
          <Text style={styles.name}>Samsung</Text>
          <Text style={styles.model}>A52</Text>
          <Button style = {commonStyles.loginScreenButton}>
                    <Text style ={commonStyles.loginText}>Request to buy</Text>
                </Button>
                <Text style={styles.model}>Description</Text>      
          <Text style={styles.description}>The main difference between both devices is the camera setup. With a telephoto lens and optical zoom, the A72 offers a camera setup we normally only see on more expensive high-end devices. The A52 doesn't have this telephoto lens</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop:8,
  },
  price: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color : '#000'
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    margin: 10,
  },
});