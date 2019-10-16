import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button, Header, TopicBlock} from '../../components';
import AsyncStorage from '@react-native-community/async-storage';
import theme from '../../constants/theme';
import {images} from '../../data/data';

export default class Topics extends Component {
  static navigationOptions = {header: null};
  state = {
    topics: '',
  };
  _onPressSubmit = value => {
    this.props.navigation.navigate('Levels', {topics: value});
  };
  render() {
    const {name} = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={'Chủ Đề'} />
        <View style={{flex: 1}}>
          <View style={theme.topic.container}>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Hoa Quả'}
                hideTitle={true}
                imgTopic={images.topic1}
                onPressSubmit={() => this._onPressSubmit('Fruits')}
              />
              <TopicBlock
                title={'Màu Sắc'}
                hideTitle={true}
                imgTopic={images.topic2}
                onPressSubmit={() => this._onPressSubmit('Colors')}
              />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Món Ăn'}
                hideTitle={true}
                imgTopic={images.topic3}
                onPressSubmit={() => this._onPressSubmit('Foods')}
              />
              <TopicBlock
                title={'Vật Dụng'}
                hideTitle={true}
                imgTopic={images.topic4}
                onPressSubmit={() => this._onPressSubmit('Stationaries')}
              />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Động Vật'}
                hideTitle={true}
                imgTopic={images.topic5}
                onPressSubmit={() => this._onPressSubmit('Animals')}
              />
              <TopicBlock
                title={'Nghề Nghiệp'}
                hideTitle={true}
                imgTopic={images.topic6}
                onPressSubmit={() => this._onPressSubmit('Jobs')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
