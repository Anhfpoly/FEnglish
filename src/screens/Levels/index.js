import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button, Header, TopicBlock} from '../../components';
import theme from '../../constants/theme';
import {images, DATA} from '../../data/data';
import { getData } from '../../utils/misc';

export default class Levels extends Component {
  static navigationOptions = {header: null};
  state = {
    scores: 10,
    opacity: 0.2,
    levels: 0,
    topics: '',
    pointsData: null
  };
  componentDidMount() {
    if (this.state.scores > 0) {
      this.setState({opacity: 1});
    } else {
      this.setState({opacity: 0.2});
    }
    this._getPoints()
  }
  _getPoints = async () => {
    let response = await getData('points');
    if(response) {
      let pointsData = JSON.parse(response);
      this.setState({pointsData})
    }
  }
  _onPressLevel = (value, value2) => {
    let topicFiltered = DATA.filter(item => item.level === 'lv' + value && item.topic === value2);
    if(this.state.pointsData) {
      let result = this.state.pointsData.map(({ levels }) => levels)
      var maxLevels = Math.max.apply(Math, result);
      if(value <= maxLevels + 1) {
        if(topicFiltered.length > 0) {
          this.props.navigation.navigate('Lessons', {levels: value, topics: value2});
        }else {
          alert('Dữ liệu cấp độ này chưa được cập nhật')
        }
      }else {
        alert('Hãy hoàn thành cấp độ trước đó')
      }
    }else {
      if(value === 1) {
        this.props.navigation.navigate('Lessons', {levels: value, topics: value2});
      }else {
        alert('Hãy hoàn thành cấp độ trước đó')
      }
    }
  };
  render() {
    const {topics} = this.props.navigation.state.params;
    const levels = [
      {level: 1, score: 8},
      {level: 2, score: 0},
      {level: 3, score: 0},
      {level: 4, score: 0},
      {level: 5, score: 0},
      {level: 6, score: 0},
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
                  topic={topics}
                  defaultTopicData={levels[index]}
                  topicData={this.state.pointsData}
                  onPressSubmit={()=>this._onPressLevel(item.level, topics)}
                />
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
