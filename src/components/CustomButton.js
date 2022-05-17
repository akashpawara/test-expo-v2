import React from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  View,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {commonStyles} from '../styles/commonStyles';

interface props {
  onPress: () => void;
}

export const CustomButton = (
  props: React.PropsWithChildren<TouchableOpacityProps> & props,
) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={commonStyles.customButton}>
      {props.children}
    </TouchableOpacity>
  );
};
