import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {sizes, fonts, colors} from '../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Answer extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginVertical: 3,
          backgroundColor: this.props.colorAnswer,
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 7,
          borderRadius: 10,
          marginHorizontal: 6,
          width: 320,
          height: 40,
        }}
        onPress={this.props.onPressAnswer}>
        <Text style={styles.btnText}>{this.props.answer}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btnText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 12,
  },
});
