import React from 'react';
import {CustomActionButton} from '../components/CustomActionButton';
import {Text, ToastAndroid, View} from 'react-native';
import {CustomTextFiled} from '../components/CustomTextFiled';
import { Button } from 'react-native-paper';
import { commonStyles } from '../styles/commonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { navigate } from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
  const navigation = useNavigation();
    return (
      <>
        <View style={{ flex: 1, justifyContent: 'center',margin:40 }}>
        <Text style = {{
         color:'#000', justifyContent: 'center',textAlign:'center',fontSize: 25,
         marginBottom:80,}}>SG Mart</Text>
        
          <View style = {{paddingTop : 10, paddingLeft : 10, paddingRight : 10}}>
            <CustomTextFiled name="UserName" isPasswordField={false} ></CustomTextFiled>
          </View>
          <View style = {{paddingTop : 10, paddingLeft : 10, paddingRight : 10}}>
            <CustomTextFiled name="Password" isPasswordField={true} ></CustomTextFiled>
          </View>

                {/* <TouchableOpacity style = {commonStyles.loginScreenButton}
                    onPress={() => {
                        navigate('Home');
                    }}>
                  <Text style = {commonStyles.loginText}>Login</Text>     
                </TouchableOpacity> */}
                <Button style = {commonStyles.loginScreenButton}
                    onPress={() => {
                      navigation.navigate('Dashboard');
                    }}>
                    <Text style ={commonStyles.loginText}>Login</Text>
                </Button>

        </View>
      </>
    );
  };




