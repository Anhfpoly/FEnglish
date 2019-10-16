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
    marginHorizontal: 60,
    fontFamily: fonts.alina,
    width: 200,
    height: 50,
    fontSize: 20,
    borderRadius: 10,
    paddingLeft: 6,
    color: '#910084'
  },
});
