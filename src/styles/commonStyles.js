import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  customButton: {
    height: 60,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginHorizontal: { marginHorizontal: 20 },
  customTextFiled: {
    paddingLeft: 10,
    height: 55,
    width: "100%",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 18
  },
  customTextInputFiled: {
    paddingLeft: 10,
    height: 125,
    width: "100%",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 18
  },
  CustomActionButton: {
      width: '40%',
      height: '25%',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      backgroundColor: 'darkblue',
      borderRadius: 30,
  },
  loginScreenButton:{
    marginRight:60,
    marginLeft:60,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#2196f3',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  cardText:{
    color:'#000',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
},
productText:{
  color:'#000',
  paddingLeft : 10,
  paddingRight : 10
},
paragraph: {
  margin: 24,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#34495e',
},
column:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',       //THIS LINE HAS CHANGED
    paddingLeft: 10,
},actionButtonIcon: {
  fontSize: 20,
  height: 22,
  color: 'white',
}
});
