import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {sizes, fonts, colors} from '../constants/theme';

export default class TextInputComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.hideTitle ? null : (
          <Text style={styles.title}>{this.props.title}</Text>
        )}
        <TextInput
          placeholder={this.props.placeholder}
          style={styles.textInput}
          value={this.props.value}
          placeholderTextColor="#910084"
          fontFamily={fonts.alina}
          fontSize={30}
          onChangeText={value => this.props.onChangeText(value)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {marginVertical: 10},
  title: {
    marginBottom: 5,
    fontSize: sizes.textBase + 1,
    fontFamily: fonts.bold,
  },
  textInput: {
    backgroundColor: colors.lightGray,
    padding: 7,
    marginHorizontal: 60,
    fontFamily: fonts.alina,
    width: 200,
    borderRadius: 10,
    color: '#910084',
  },
});
