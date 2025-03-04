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
  flogo2: {
    fontSize: 23,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
const topic = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#a01fbd',
    fontSize: 26,
    fontFamily: fonts.alina,
  },
  scores: {
    color: '#ff4800',
    fontSize: 23,
    fontFamily: fonts.alina,
  },
  blockTopic: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  viewTopic: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 50,
    margin: 30,
  },
});
const lesson = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  level: {
    fontSize: 26,
    color: colors.blue,
    fontWeight: 'bold',
    margin: 10,
  },
  unit: {
    fontSize: 20,
    color: colors.lightBlue,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  wrapImg: {
    width: 280,
    height: 280,
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 26,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 260,
    height: 260,
  },
  vocabulary: {
    fontSize: 23,
    color: '#ff4800',
    fontWeight: 'bold',
  },
  vietnamese: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
});
const exercise = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  level: {
    fontSize: 26,
    color: colors.blue,
    fontWeight: 'bold',
    marginTop: 100,
  },
  unit: {
    fontSize: 20,
    color: colors.lightBlue,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wrapImg: {
    width: 160,
    height: 160,
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 26,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 130,
    height: 130,
  },
  vocabulary: {
    fontSize: 18,
    color: '#ff4800',
    fontWeight: 'bold',
    margin: 10,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 120,
  },
});
const result = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginVertical: 20,
  },
  username: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  point: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 10,
  }
});
const theme = {
  welcome,
  topic,
  lesson,
  exercise,
  result,
};
export default theme;
