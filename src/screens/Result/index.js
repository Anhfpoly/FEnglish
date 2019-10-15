import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button, Header, TopicBlock} from '../../components';
import theme from '../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { storeData } from '../../utils/misc';

export default class Result extends Component {
  static navigationOptions = {header: null};
  state = {
  };
  componentDidMount() {
    // const {point, levels,topics} = this.props.navigation.state.params;
    // let data = {point, levels,topics}
    // storeData('points', JSON.stringify(data))
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
