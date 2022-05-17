import * as React from 'react';
import { View, useWindowDimensions,TouchableOpacity,Text,Image} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Card } from 'react-native-elements'
import { commonStyles } from '../../styles/commonStyles';
import { useNavigation } from '@react-navigation/native';


export const FirstRoute = () => (
  <View style={{ flex: 1,flexDirection: 'row',justifyContent: 'center'}}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Product')}}>
        <Card containerStyle={{padding: 5}}>
        <Image
            source={require("../../assets/images/a52.jpg")}
            resizeMode="contain"
            style={{ width: 150, height: 150}}
          />
            <Text style ={commonStyles.cardText}>Samsung</Text>
          <Text style ={commonStyles.cardText}>A54</Text>
          <Card.Title>₹15000</Card.Title>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Tab')}}>
        <Card containerStyle={{padding: 5}}>
          <Image
            source={require("../../assets/images/a52.jpg")}
            resizeMode="contain"
            style={{ width: 150, height: 150}}
          />
          <Text style ={commonStyles.cardText}>Samsung</Text>
          <Text style ={commonStyles.cardText}>A52</Text>
          <Card.Title >₹25000</Card.Title>
        </Card>
        </TouchableOpacity>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1}} />
);

const renderScene = SceneMap({
  mobile: FirstRoute,
  laptop: SecondRoute,
});

export const TabScreen = () => {
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'mobile', title: 'Mobile' },
    { key: 'laptop', title: 'Laptop' },
  ]);

  return (
//    <TabView
//    navigationState={{ index, routes }}
//    renderScene={renderScene}
//    onIndexChange={setIndex}
//    initialLayout={{ width: layout.width }}
//  />
<View style={{ flex: 1,flexDirection: 'row',justifyContent: 'center'}}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Product')}}>
        <Card containerStyle={{padding: 5}}>
        <Image
            source={require("../../assets/images/a52.jpg")}
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
            source={require("../../assets/images/a52.jpg")}
            resizeMode="contain"
            style={{ width: 150, height: 150}}
          />
          <Text style ={commonStyles.cardText}>Samsung</Text>
          <Text style ={commonStyles.cardText}>A52</Text>
          <Card.Title >₹25000</Card.Title>
        </Card>
        </TouchableOpacity>
  </View>
  );
}