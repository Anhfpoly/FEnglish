import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import theme from '../constants/theme';

export default class TopicBlock extends Component {
  render() {
    return (
      <View style={theme.topic.viewTopic}>
        <Image
          source={this.props.imgTopic}
          style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        </Image>
        <Text style={theme.topic.title}>{this.props.title}</Text>
      </View>
    );
  }
}
