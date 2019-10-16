import React, {Component} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';

export default class TopicBlock extends Component {
  render() {
    const {topicData, defaultTopicData,topic} = this.props;
    let topicFiltered = []
    
    if(topicData) {   
      topicFiltered = topicData.filter(item => item.levels === defaultTopicData.level && topic === item.topics)
    }
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
              borderColor: '#FFE500',
              borderWidth: 2,
              borderRadius: 100,
            },
            this.props.type === 'questions' && {opacity: topicFiltered.length > 0 ? topicFiltered[0].point > 0 ? 1 : 0.2 : 0.2},
          ]}>
          {this.props.hideTitle ? null : (
            <Text style={theme.topic.scores}>{topicFiltered.length > 0 ? topicFiltered[0].point + '/10đ' : '0/10đ'}</Text>
          )}
        </ImageBackground>
        <Text
          style={[
            theme.topic.title,
            this.props.type === 'questions' && {opacity: topicFiltered.length > 0 ? topicFiltered[0].point > 0 ? 1  : 0.2 : 0.2},
          ]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
