import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button, Header, TopicBlock} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';
import {getData} from '../../utils/misc';

export default class Result extends Component {
  static navigationOptions = {header: null};
  state = {
    userName: '',
  };

  componentDidMount() {
    const {point, levels, topics} = this.props.navigation.state.params;
    let data = {point: point, levels: levels, topics: topics};
    this._savePoints(data);
    this._getUserName();
  }
  _getUserName = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        this.setState({userName: value});
      }
    } catch (error) {
    }
  };
  
  _savePoints = async data => {
    try {
      let oldData = await getData('points');
      if (oldData) {
        oldData = JSON.parse(oldData);
        let dataIndex = oldData.findIndex(item => item.levels === data.levels && item.topics === data.topics);
        if (dataIndex !== -1 && oldData[dataIndex].point < data.point) {
          oldData[dataIndex] = data;
          await AsyncStorage.setItem('points', JSON.stringify(oldData));
        } else if (dataIndex === -1) {
          oldData.push(data);
          await AsyncStorage.setItem('points', JSON.stringify(oldData));
        }
      } else {
        let resultData = [];
        resultData.push(data);
        await AsyncStorage.setItem('points', JSON.stringify(resultData));
      }
    } catch (error) {
      console.log(error);
    }
  };
  _onPressHome = () => {
    this.props.navigation.navigate('Topics');
  };
  render() {
    const {point} = this.props.navigation.state.params;
    return (
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={['#550031', '#760056', '#910084', '#a01fbd', '#9c44fe']}
        style={theme.result.linearGradient}>
        <View style={theme.result.container}>
          <Text style={theme.result.title}>HOÀN THÀNH BÀI TẬP</Text>
          <Text style={theme.result.username}>Điểm số của bé {this.state.userName} là:</Text>
          <Text style={theme.result.point}>{point} Điểm</Text>
          <Entypo name={'medal'} size={120} color={'#FF9800'} />
          <Button
            btnValue={'Về trang chủ'}
            name={'home'}
            onPressSubmit={() => this._onPressHome()}
            colorButton={'#FF6F91'}
          />
        </View>
      </LinearGradient>
    );
  }
}
