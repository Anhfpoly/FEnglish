import React, {Component} from 'react';
import {View, Text, Modal, TouchableOpacity, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../constants/theme';
import {TextInput, Button} from '../components/';
import AsyncStorage from '@react-native-community/async-storage';
export default class Welcome extends Component {
  state = {
    nameValue: '',
    isUserName: true,
    buttonColor: '#9d9d9d',
    modalVisible: false,
  };
  _onChangeText = value => {
    this.setState({
      nameValue: value,
      isUserName: false,
      buttonColor: '#FF6F91',
    });
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
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
        <View
          style={{
            marginTop: 22,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Vui lòng click vào "Ẩn Thông Tin"');
            }}>
            <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              colors={['#550031', '#760056', '#910084', '#a01fbd', '#9c44fe']}
              style={theme.welcome.linearGradient}>
              <View>
                <Text style={{fontSize: 23, color: '#fff', marginBottom: 30}}>
                  Kỹ Năng Làm Việc - Nhóm 4
                </Text>
                <Text style={{fontSize: 16, color: '#ff4800', marginBottom: 6}}>
                  Giáo Viên Hướng Dẫn:
                </Text>
                <Text style={{fontSize: 20, color: '#fff', marginBottom: 30}}>
                  Lương Thị Nhung
                </Text>
                <Text style={{fontSize: 16, color: '#ff4800', marginBottom: 6}}>
                  Thành Viên:
                </Text>
                <Text style={{fontSize: 16, color: '#fff', marginBottom: 6}}>
                  Nguyễn Cao Hoàng Triều - PS08327
                </Text>
                <Text style={{fontSize: 16, color: '#fff', marginBottom: 6}}>
                  Nguyễn Quốc Anh - PS08392
                </Text>
                <Text style={{fontSize: 16, color: '#fff', marginBottom: 6}}>
                  Trần Anh Hậu - PS08367
                </Text>
                <Text style={{fontSize: 16, color: '#fff', marginBottom: 6}}>
                  Nguyễn Minh Trí - PS08368
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#fff',
                    marginBottom: 6,
                    marginBottom: 30,
                  }}>
                  Lưu Chí Thiện - PS08353
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 6,
                  }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{color: '#fff'}}>Ẩn Thông Tin</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </Modal>

          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}
            style={{
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 6,
            }}>
            <Text style={{color: '#fff'}}>Thông Tin Nhóm</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
