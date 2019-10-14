import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {sizes, fonts, colors} from '../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';

export default class TextInputComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          backgroundColor: this.props.colorButton,
          alignItems: 'center',
          padding: 7,
          borderRadius: 10,
          marginTop: 30,
          marginHorizontal: 6,
          width: 140,
          height: 40,

          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={this.props.onPressSubmit}>
        <Text style={styles.btnText}>{this.props.btnValue}</Text>
        <Entypo name={this.props.name} size={22} color={colors.white}></Entypo>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btnText: {
    color: '#fff',
    marginRight: 6,
  },
});
