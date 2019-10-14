import React, {Component} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';

export default class TopicBlock extends Component {
  state = {
    opacity: 0.2,
  };
  componentDidMount() {
    if (this.props.scores > 0) {
      this.setState({opacity: 1});
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={theme.topic.viewTopic}
        onPress={this.props.onPressSubmit}>
        <ImageBackground
          source={this.props.imgTopic}
          style={[
            {
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            },
            this.props.type === 'questions' && {opacity: this.state.opacity},
          ]}>
          {this.props.hideTitle ? null : (
            <Text style={theme.topic.scores}>{this.props.scores + '/10đ'}</Text>
          )}
        </ImageBackground>
        <Text
          style={[
            theme.topic.title,
            this.props.type === 'questions' && {opacity: this.state.opacity},
          ]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
