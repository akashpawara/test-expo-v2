import React from 'react';
import {commonStyles} from '../styles/commonStyles';
import {
  View,
  TextInput,KeyboardTypeOptions
} from 'react-native';


interface Props {
    name?: string;
    value?: string;
    isPasswordField?: boolean;
    keyboardType?: KeyboardTypeOptions;
    //onChangeText: (value: string) => void;
}

export const  CustomTextFiled = (props: React.PropsWithChildren<Props>) => {

    const placeHolderName = props.name;
    const isPasswordFiled = props.isPasswordField;

    return (
           <TextInput style = {commonStyles.customTextFiled} secureTextEntry = {isPasswordFiled} placeholder = {placeHolderName} ></TextInput>
      ); 
};







