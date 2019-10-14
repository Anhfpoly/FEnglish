import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button, Header, TopicBlock} from '../../components';
import theme from '../../constants/theme';
import {images} from '../../data/data';

export default class Topics extends Component {
  static navigationOptions = {header: null};
  render() {
    const {name} = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{flex:1}}>
        <Header title={'Chủ Đề'} />
        <View style={{flex:1}}>
          <View style={theme.topic.container}>
            <View style={theme.topic.blockTopic}>
              <TopicBlock title={'Hoa Quả'} imgTopic={images.topic1} />
              <TopicBlock title={'Màu Sắc'} imgTopic={images.topic2} />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock title={'Món Ăn'} imgTopic={images.topic3} />
              <TopicBlock title={'Vật Dụng'} imgTopic={images.topic4} />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock title={'Động Vật'} imgTopic={images.topic5} />
              <TopicBlock title={'Nghề Nghiệp'} imgTopic={images.topic6} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
