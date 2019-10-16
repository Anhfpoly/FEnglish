import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image,BackHandler} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../../components';
import theme from '../../constants/theme';
import {images} from '../../data/data';
import data from '../../data/data';
import {Button, Answer} from '../../components';
import Tts from 'react-native-tts';
import {shuffle} from '../../utils/misc';
Tts.setDefaultLanguage('en-IE');

export default class Exercises extends Component {
  static navigationOptions = {header: null};
  
  state = {
    scores: 10,
    isStartLesson: false,
    colorOption: '#929798',
    questionIndex: 0,
    isSelected: false,
    userSelected: '',
    newFiltered: null,
    curPoint: 0,
  };
  
  _onPressNext = () => {
    if (this.state.isSelected) {
      const {levels, topics, filteredData} = this.props.navigation.state.params;
      if (this.state.questionIndex < filteredData.length - 1) {
        this.setState(
          {
            questionIndex: this.state.questionIndex + 1,
            isSelected: false,
            userSelected: '',
          },
          () => this._shuffleQuestion(),
        );
      } else {
        this.props.navigation.navigate('Result', {
          point: this.state.curPoint,
          levels,
          topics,
        });
      }
    } else {
      alert('Hãy chọn đáp án!!!');
    }
  };
  _changeStatus = () => {
    this.setState({isStartLesson: !this.state.isStartLesson});
  };
  _checkAnswer = value => {
    const {filteredData} = this.props.navigation.state.params;
    const {questionIndex} = this.state;
    this.setState({
      isSelected: true,
      userSelected: value,
      curPoint:
        filteredData[questionIndex].answer === value
          ? this.state.curPoint + 1
          : this.state.curPoint,
    });
    Tts.stop();
    Tts.getInitStatus().then(() => {
      Tts.speak(value);
    });
  };

  componentDidMount() {
    this._shuffleQuestion();
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.navigate('TopicsStack')
    return true;
  };
  _shuffleQuestion = () => {
    const {filteredData} = this.props.navigation.state.params;
    const {questionIndex} = this.state;
    let newFiltered = shuffle(filteredData[questionIndex].questions);
    this.setState({newFiltered});
  };
  _renderQuestion = () => {
    const {newFiltered} = this.state;
    const {filteredData} = this.props.navigation.state.params;
    const {questionIndex} = this.state;
    return (
      <>
        <Answer
          disabled={this.state.isSelected}
          answer={newFiltered[0]}
          colorAnswer={[
            this.state.isSelected
              ? newFiltered[0] === filteredData[questionIndex].answer
                ? '#31BB62'
                : '#ff4800'
              : '#929798',
          ]}
          overideStyle={
            this.state.userSelected === newFiltered[0] && {
              borderColor: '#000',
              borderWidth: 2,
            }
          }
          onPressAnswer={() => this._checkAnswer(newFiltered[0])}
        />
        <Answer
          disabled={this.state.isSelected}
          answer={newFiltered[1]}
          colorAnswer={[
            this.state.isSelected
              ? newFiltered[1] === filteredData[questionIndex].answer
                ? '#31BB62'
                : '#ff4800'
              : '#929798',
          ]}
          overideStyle={
            this.state.userSelected === newFiltered[1] && {
              borderColor: '#000',
              borderWidth: 2,
            }
          }
          onPressAnswer={() => this._checkAnswer(newFiltered[1])}
        />
        <Answer
          disabled={this.state.isSelected}
          answer={newFiltered[2]}
          colorAnswer={[
            this.state.isSelected
              ? newFiltered[2] === filteredData[questionIndex].answer
                ? '#31BB62'
                : '#ff4800'
              : '#929798',
          ]}
          overideStyle={
            this.state.userSelected === newFiltered[2] && {
              borderColor: '#000',
              borderWidth: 2,
            }
          }
          onPressAnswer={() => this._checkAnswer(newFiltered[2])}
        />
        <Answer
          disabled={this.state.isSelected}
          answer={newFiltered[3]}
          colorAnswer={[
            this.state.isSelected
              ? newFiltered[3] === filteredData[questionIndex].answer
                ? '#31BB62'
                : '#ff4800'
              : '#929798',
          ]}
          overideStyle={
            this.state.userSelected === newFiltered[3] && {
              borderColor: '#000',
              borderWidth: 2,
            }
          }
          onPressAnswer={() => this._checkAnswer(newFiltered[3])}
        />
      </>
    );
  };
  render() {
    const {levels, topics, filteredData} = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={topics} />
        {this.state.isStartLesson ? (
          <View style={theme.exercise.container}>
            <Text style={theme.exercise.level}>Cấp Độ {levels}</Text>
            <Text style={theme.exercise.unit}>
              Câu số {this.state.questionIndex + 1}
            </Text>
            <View style={theme.exercise.wrapImg}>
              <Image
                source={filteredData[this.state.questionIndex].imgurl}
                style={theme.exercise.img}
                resizeMode={'cover'}></Image>
            </View>
            <Text style={theme.exercise.vocabulary}>
              {filteredData[this.state.questionIndex].question}
            </Text>
            <View>{this._renderQuestion()}</View>
            <View style={theme.exercise.btnView}>
              <Button
                name={'controller-next'}
                colorButton={this.state.isSelected ? '#FF6F91' : '#929798'}
                btnValue={'Câu tiếp theo'}
                onPressSubmit={this._onPressNext}
              />
            </View>
          </View>
        ) : (
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            colors={['#550031', '#760056', '#910084', '#a01fbd', '#9c44fe']}
            style={theme.welcome.linearGradient}>
            <Text style={theme.welcome.flogo}>
              Bé đã hoàn thành bài học thật xuất sắc!
            </Text>
            <Text style={theme.welcome.flogo2}>
              Hãy thử làm những bài tập sau đây để xem bé ghi nhớ được những gì
              nha!
            </Text>
            <Button
              btnValue={'Bắt đầu nào!'}
              name={'controller-next'}
              onPressSubmit={() => this._changeStatus()}
              colorButton={'#FF6F91'}
            />
          </LinearGradient>
        )}
      </SafeAreaView>
    );
  }
}
