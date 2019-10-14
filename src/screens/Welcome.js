import React, {Component} from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../constants/theme';
import {TextInput, Button} from '../components/';

export default class Welcome extends Component {
  state = {
    nameValue: '',
  };
  _onChangeText = value => {
    this.setState({nameValue: value});
  };
  _onPressSubmit = () => {
    this.props.navigation.navigate('Topics', {name: this.state.nameValue});
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
          btnValue={'Bắt đầu nào!'}
          name={'language'}
          onPressSubmit={this._onPressSubmit}
          colorButton={'#FF6F91'}
        />
      </LinearGradient>
    );
  }
}
