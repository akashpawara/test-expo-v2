import React from 'react';
import {Image, View,Text} from 'react-native';
import {Navigation} from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';


export const TermsScreen = () => {
  
const navigation = useNavigation();

    return (
      <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style ={{color:'#000',margin:10,fontSize:18}}>Terms & conditions</Text>
        {/* <Image
            source={require("../assets/images/profileIcon.png")}
            resizeMode="contain"
            style={{ width: 200, height: 80}}
          /> */}
          <Text style ={{color:'#000',margin:10,textAlign:'justify'}}>Mobile app terms and conditions, also referred to as app terms of service or app terms of use, explain the rules, requirements, restrictions, and limitations that users must abide by in order to use a mobile application. Specifically, they act as a binding contract between you and your users. This contract helps protect the rights of both parties.

Business owners and app developers often use the same terms and conditions for both their website and mobile applications in order to keep their terms consistent across all platforms.

App terms and conditions help protect the owner’s intellectual property, and allow them to prohibit unwanted user activity and terminate user accounts that violate their terms.</Text>
        </View>
      </>
    );
  };




