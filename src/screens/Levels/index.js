import React, {Component} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button, Header, TopicBlock} from '../../components';
import theme from '../../constants/theme';
import {images} from '../../data/data';
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
    let pointsData = JSON.parse(response);
    console.log(pointsData)
    this.setState({pointsData})
  }
  _onPressLevel = (value, value2) => {
    this.props.navigation.navigate('Lessons', {levels: value, topics: value2});
  };
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
