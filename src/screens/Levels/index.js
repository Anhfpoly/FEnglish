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
  componentDidMount() {
    if (this.state.scores > 0) {
      this.setState({opacity: 1});
    } else {
      this.setState({opacity: 0.2});
    }
  }
  _status = () => {};
  render() {
    const {topics} = this.props.navigation.state.params;
    const {scores} = this.state;
    const levels = [
      {level: 1, score: 8},
      {level: 2, score: 0},
      {level: 3, score: 0},
      {level: 4, score: 0},
      {level: 5, score: 0},
      {level: 6, score: 0},
      {level: 7, score: 0},
      {level: 8, score: 0},
    ];
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={topics} />
        <View style={{flex: 1}}>
          <View style={theme.topic.container}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
              {levels.map((item, index) => (
                <TopicBlock
                  key={index}
                  title={'Cấp độ ' + item.level}
                  imgTopic={images.star}
                  type='questions'
                  scores={item.score}
                  onPressSubmit={this._onPressSubmit}
                />
              ))}
            </View>
          </View>
          {/* <View style={theme.topic.container}>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Cấp độ 1'}
                imgTopic={images.star}
                scores={scores + '/10đ'}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
              <TopicBlock
                title={'Cấp độ 2'}
                imgTopic={images.star}
                scores={scores + '/10đ'}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Cấp độ 3'}
                imgTopic={images.star}
                scores={scores + '/10đ'}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
              <TopicBlock
                title={'Cấp độ 4'}
                imgTopic={images.star}
                scores={scores + '/10đ'}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Cấp độ 5'}
                imgTopic={images.star}
                scores={scores + '/10đ'}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
              <TopicBlock
                title={'Cấp độ 6'}
                imgTopic={images.star}
                scores={scores + '/10đ'}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
            </View>
            <View style={theme.topic.blockTopic}>
              <TopicBlock
                title={'Level 7'}
                imgTopic={images.star}
                scores={scores + '/10đ'}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
              <TopicBlock
                title={'Level 8'}
                imgTopic={images.star}
                scores={scores + '/10đ'}
                opacity={this.state.opacity}
                onPressSubmit={this._onPressSubmit}
              />
            </View>
          </View> */}
        </View>
      </SafeAreaView>
    );
  }
}
