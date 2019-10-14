import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button, Header, TopicBlock} from '../../components';
import theme from '../../constants/theme';
import {images} from '../../data/data';

export default class Levels extends Component {
  static navigationOptions = {header: null};
  state = {
    scores: 10,
    opacity: 0.2,
  };
  _status = () => {
  };
  render() {
    let score = '';
    if (this.state.scores > 0) {
      score = this.state.scores + '/10 đ';
    } else {
      score = '';
    }
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={'Levels'} />
        <View style={{flex: 1}}>
          <View style={theme.topic.container}>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Cấp độ 1'}
                imgTopic={images.star}
                scores={score}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
              <TopicBlock
                title={'Cấp độ 2'}
                imgTopic={images.star}
                scores={score}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Cấp độ 3'}
                imgTopic={images.star}
                scores={score}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
              <TopicBlock
                title={'Cấp độ 4'}
                imgTopic={images.star}
                scores={score}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Cấp độ 5'}
                imgTopic={images.star}
                scores={score}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
              <TopicBlock
                title={'Cấp độ 6'}
                imgTopic={images.star}
                scores={score}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Level 7'}
                imgTopic={images.star}
                scores={score}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
              <TopicBlock
                title={'Level 8'}
                imgTopic={images.star}
                scores={score}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
