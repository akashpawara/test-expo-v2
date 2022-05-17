import React from 'react';
import {Image, View, Text, ToastAndroid,TouchableOpacity,StyleSheet, StatusBar , Linking} from 'react-native';
import {Navigation} from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements'
import { commonStyles } from '../styles/commonStyles';
import {TabScreen} from '../screens/ItemScreen/TabScreen'

import { Transitioning, Transition } from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.Out
      type="fade"
      durationMs={200}
      // interpolation="easeOut"
    />
    <Transition.Change />
    <Transition.In
      type="fade"
      durationMs={200}
      // interpolation="easeIn"
    />
  </Transition.Together>
);

const colors = [
  {
    bg: '#c34044',
    color: '#FECBCD',
    category: 'Electronics',
    subCategories: ['Mobiles', 'Headphones', 'Laptop / PC', 'IPad / Tablets', 'TV, Video/Audio',  'Others'],
  },
  {
    bg: '#493e66',
    color: '#FECBCD',
    category: 'Appliances',
    subCategories: [
      'Washing Machine',
      'Refrigerator',
      'Microwave',  
    ],
  },
  {
    bg: '#396b93',
    color: '#FECBCD',
    category: 'Automobiles',
    subCategories: [
      'Cars',
      'Bikes',
      'Bicycles',
    ],
  },
  {
    bg: '#41aca7',
    color: '#FECBCD',
    category: 'Housing',
    subCategories: ['Resale', 'Rent', 'PG', 'Room Share'],
  },
  {
    bg: '#dc8351',
    color: '#FECBCD',
    category: 'Car Pooling',
    subCategories: ['Leela Business Park', 'Timesquare', 'Seawoods', 'Other Places'],
  },
];
export const HomeScreen = () => {
  
const navigation = useNavigation();
const ref = React.useRef();
  const [selectedColor, setSelectedColor] = React.useState('');

return (
  <Transitioning.View
    ref={ref}
    transition={transition}
    style={styles.container}>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#000000" translucent = {false}/>
    {colors.map(({ bg, color, category, subCategories }, index) => {
      return (
        <TouchableOpacity
          key={category}
          activeOpacity={0.9}
          onPress={() => {
            ref.current.animateNextTransition();
            setSelectedColor(bg === selectedColor ? '' : bg);
          }}
          style={styles.cardContainer}>
          <View
            style={[styles.card, { backgroundColor: bg }]}>
            <Text style={[styles.category, { color }]}>{category}</Text>
            {selectedColor === bg && (
              <View style={{ marginTop: 15 }}>
                {subCategories.map((i) => {
                  return (
                    <Text style={[styles.subcategory, { color }]} key={i} onPress={() => {
                      navigation.navigate('Tab');
                        }}>
                      {i}
                    </Text>
                  );
                })}
              </View>
            )}
          </View>
        </TouchableOpacity>
        
      );
    })}
  </Transitioning.View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    
  },
  cardContainer: {
    padding: 3,
    flexGrow: 1,
    
  }, 
  card: {
    // alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'center',
    flexGrow: 1,
    borderRadius: 15,
  },
  category: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 6,
  },
  subcategory: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 18 * 2.2,
    cursor: 'pointer',
  },
});





