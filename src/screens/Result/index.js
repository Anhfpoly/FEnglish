import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button, Header, TopicBlock} from '../../components';
import theme from '../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';
import { getData } from '../../utils/misc';

export default class Result extends Component {
  static navigationOptions = {header: null};

  componentDidMount() {
    const {point, levels, topics} = this.props.navigation.state.params;
    let data = {point: point, levels: levels, topics: topics}
    this._savePoints(data)
  }
  _savePoints = async (data) => {
    try {
      let oldData = await getData('points');
      if(oldData) {
        oldData = JSON.parse(oldData);
        let dataIndex = oldData.findIndex(item => item.levels === data.levels);
        if(dataIndex !== -1) {
          oldData[dataIndex] = data;
          await AsyncStorage.setItem('points', JSON.stringify(oldData));
        } else {
          oldData.push(data);
          await AsyncStorage.setItem('points', JSON.stringify(oldData));
        }
      } else {
        let resultData = [];
        resultData.push(data);
        await AsyncStorage.setItem('points', JSON.stringify(resultData)); 
      }
    } catch (error) {
      console.log(error)
    }
  } 
  _onPressHome = () => {
    this.props.navigation.navigate('Topics');
  };
  render() {
    const {point} = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={'Kết Quả'} />
        <View style={{flex: 1}}>
          <View style={theme.result.container}>
          <Text>{point}</Text>
          <Entypo name={'medal'}  size={120} color={'#FF9800'}/>
          <Button
              btnValue={'Về trang chủ'}
              name={'home'}
              onPressSubmit={() => this._onPressHome()}
              colorButton={'#FF6F91'}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
