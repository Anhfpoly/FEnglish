import React, {Component} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';

export default class TopicBlock extends Component {
  render() {
    return (
      <TouchableOpacity
        style={theme.topic.viewTopic}
        onPress={this.props.onPressSubmit}>
        <ImageBackground
          source={this.props.imgTopic}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: this.props.opacity,
          }}>
          <Text style={theme.topic.scores}>{this.props.scores}</Text>
        </ImageBackground>
        <Text style={theme.topic.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
