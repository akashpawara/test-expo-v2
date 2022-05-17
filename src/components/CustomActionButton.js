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

export const CustomActionButton = (
  props: React.PropsWithChildren<TouchableOpacityProps> & props,
) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={commonStyles.CustomActionButton}>
      {props.children}
    </TouchableOpacity>
  );
};
