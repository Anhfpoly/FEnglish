import {StyleSheet, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');
export const sizes = {
  textBase: 14,
};

export const colors = {
  white: '#fff',
  yellow: '#FF9800',
  red: '#FF0000',
  blue: '#11116B',
  lightBlue: '#8684C4',
  lightGreen: '#ADD578',
  gray: '#929798',
  lightGray: '#E8EEEF',
  green: '#31BB62',
  black: '#000',
};
export const fonts = {
  light: 'Roboto-Light',
  medium: 'Roboto-Medium',
  regular: 'Roboto-Regular',
  thin: 'Roboto-Thin',
  bold: 'Roboto-Bold',
  black: 'Roboto-Black',
  alina: 'Alina',
};

const welcome = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  flogo: {
    fontSize: 38,
    textAlign: 'center',
    margin: 10,
    color: '#F9F871',
    backgroundColor: 'transparent',
  },
});
const topic = StyleSheet.create({
  container:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20
  },
  blockTopic: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  viewTopic:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 50,
    margin: 30,
  }
});
const theme = {
  welcome,
  topic,
};
export default theme;
