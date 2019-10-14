import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {sizes, fonts, colors} from '../constants/theme';

export default class Header extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={[styles.headerText, this.props.backgroundColor]}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a01fbd',
    padding: 12,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: sizes.textBase + 6,
    flexGrow: 1,
    textAlign: 'center',
  },
});
