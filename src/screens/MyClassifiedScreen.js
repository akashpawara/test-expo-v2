import React from 'react';
import {Image, View,TouchableOpacity,Text} from 'react-native';
import {Navigation} from '../navigation/Navigation';
import { LoginScreen } from './LoginScreen';
import { useNavigation } from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import { Card } from 'react-native-elements'
import { commonStyles } from '../styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export const MyClassifiedScreen = () => {
 const navigation = useNavigation()
    return (
      <>
      <View style={{ flex: 1,flexDirection: 'row',justifyContent: 'center'}}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Product')}}>
        <Card containerStyle={{padding: 5}}>
        <Image
            source={require("../assets/images/a52.jpg")}
            resizeMode="contain"
            style={{ width: 150, height: 150}}
          />
            <Text style ={commonStyles.cardText}>Samsung</Text>
          <Text style ={commonStyles.cardText}>A54</Text>
          <Card.Title>₹15000</Card.Title>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Product')}}>
        <Card containerStyle={{padding: 5}}>
          <Image
            source={require("../assets/images/a52.jpg")}
            resizeMode="contain"
            style={{ width: 150, height: 150}}
          />
          <Text style ={commonStyles.cardText}>Samsung</Text>
          <Text style ={commonStyles.cardText}>A52</Text>
          <Card.Title >₹25000</Card.Title>
        </Card>
        </TouchableOpacity>
  </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#2196f3' title="New Classified" onPress={() =>  navigation.navigate('NewClassified')}>
            <Icon name="md-create" style={commonStyles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        
        </View>
      </>
    );
  };




