import React, { useState } from "react";
import {CustomActionButton} from '../components/CustomActionButton';
import {Text, ToastAndroid, View,TextInput} from 'react-native';
import {CustomTextFiled} from '../components/CustomTextFiled';
import { Button } from 'react-native-paper';
import { commonStyles } from '../styles/commonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { navigate } from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';


export const NewClassifiedScreen = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const navigation = useNavigation();
    return (
      <>
        <View style={{ flex: 1, justifyContent: 'center',margin:40 }}>
        <View style={{borderWidth: 1,borderRadius: 10,margin:10, borderColor: 'gray'}}>
           <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Select Category" value="java" />
        <Picker.Item label="Electronics" value="js" />
      </Picker>
      </View>

      <View style={{borderWidth: 1,borderRadius: 10,margin:10, borderColor: 'gray'}}>
           <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Select Sub Category" value="java" />
        <Picker.Item label="Mobile" value="js" />
      </Picker>
      </View>

          <View style = {{paddingTop : 10, paddingLeft : 10, paddingRight : 10}}>
            <CustomTextFiled name="Enter Model Name" isPasswordField={false} ></CustomTextFiled>
          </View>

          <View style = {{paddingTop : 10, paddingLeft : 10, paddingRight : 10}}>
            <CustomTextFiled name="Enter Model Year" isPasswordField={false} ></CustomTextFiled>
          </View>

          <View style = {{paddingTop : 10, paddingLeft : 10, paddingRight : 10}}>
            <CustomTextFiled name="Enter Duration Of use" isPasswordField={false} ></CustomTextFiled>
          </View>

          <View style = {{paddingTop : 10, paddingLeft : 10, paddingRight : 10}}>
            <TextInput  placeholder="Enter Description" multiline style={commonStyles.customTextInputFiled}></TextInput>
          </View>

          <Button style = {commonStyles.loginScreenButton}
                    onPress={() => {
                     
                    }}>
                    <Text style ={commonStyles.loginText}>Upload Image</Text>
                </Button>
         
                <Button style = {commonStyles.loginScreenButton}
                    onPress={() => {
                      navigation.navigate('Dashboard');
                    }}>
                    <Text style ={commonStyles.loginText}>Submit</Text>
                </Button>

        </View>
      </>
    );
  };




