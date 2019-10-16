import React, {Component} from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../constants/theme';
import {TextInput, Button} from '../components/';
import AsyncStorage from '@react-native-community/async-storage';
export default class Welcome extends Component {
  state = {
    nameValue: '',
    isUserName: true,
    buttonColor: '#9d9d9d'
  };
  _onChangeText = value => {
    this.setState({nameValue: value, isUserName: false, buttonColor: '#FF6F91'});
  };
  _onPressSubmit = () => {
    this.props.navigation.navigate('Topics', {name: this.state.nameValue});
    this._saveUserName(this.state.nameValue);
  };
  _saveUserName = async data => {
    try {
      await AsyncStorage.setItem('username', data);
    } catch (error) {
      // Error saving data
    }
  };
  render() {
    return (
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={['#550031', '#760056', '#910084', '#a01fbd', '#9c44fe']}
        style={theme.welcome.linearGradient}>
        <Text style={theme.welcome.flogo}>F-ENGLISH</Text>
        <Text style={theme.welcome.buttonText}>TIẾNG ANH CHO BÉ</Text>
        <TextInput
          placeholder={'Tên của bé là gì?'}
          value={this.state.nameValue}
          onChangeText={this._onChangeText}
        />
        <Button
          disabled={this.state.isUserName}
          btnValue={'Bắt đầu nào!'}
          name={'language'}
          onPressSubmit={this._onPressSubmit}
          colorButton={this.state.buttonColor}
        />
      </LinearGradient>
    );
  }
}
