import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { func, string, shape, bool, number } from 'prop-types';
import styles from './DescriptionCard.styles';

const DescriptionCard = ({ data: { description, cards }, num, onPress, cardsAmount }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.95}
    >
      <View style={styles.labelContainer}>
        <View style={styles.labelTextContainer}>
          
        </View>
      </View>
      <View>
        <Text style={styles.mainText}>{description}</Text>
      </View>
      
    </TouchableOpacity>
  );
};

DescriptionCard.propTypes = {
  onPress: func,
  data: shape({
    number: string,
    description: string,
    value: bool,
    revealed: bool,
    picked: bool,
  }),
  num: number,
  cardsAmount: number,
};

export default DescriptionCard;
