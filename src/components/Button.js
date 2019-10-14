import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {sizes, fonts, colors} from '../constants/theme';

export default class TextInputComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPressSubmit}>
        <Text style={styles.btnText}>{this.props.btnValue}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: '#FF6F91',
    padding: 7,
    borderRadius: 10,
    marginTop: 30,
  },
  btnText: {
    color: '#fff',
  },
});
