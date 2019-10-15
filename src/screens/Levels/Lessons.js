import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../../components';
import theme from '../../constants/theme';
import {images, DATA} from '../../data/data';
import {Button} from '../../components';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('en-IE');
export default class Lessons extends Component {
  static navigationOptions = {header: null};
  state = {
    scores: 10,
    isStartLesson: false,
    filteredData: null,
    questionIndex: 0,
  };
  componentDidMount() {
    const {levels, topics} = this.props.navigation.state.params;
    let filteredData = DATA.filter(
      item => item.topic === topics && `lv${levels}` === item.level,
    );
    this.setState({filteredData});
  }

  _onPressNext = (value, value2) => {
    const {questionIndex, filteredData} = this.state;
    if (questionIndex < filteredData.length - 1) {
      this.setState({questionIndex: this.state.questionIndex + 1});
    } else {
      this.props.navigation.navigate('Exercises', {
        levels: value,
        topics: value2,
        filteredData,
      });
    }
  };
  _onPressRepeat = value => {
    Tts.stop();
    Tts.getInitStatus().then(() => {
      Tts.speak(value);
    });
  };
  _changeStatus = () => {
    this.setState({isStartLesson: !this.state.isStartLesson});
  };
  render() {
    const {levels, topics} = this.props.navigation.state.params;
    const {questionIndex, filteredData} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={topics} />
        {this.state.isStartLesson ? (
          <View style={theme.lesson.container}>
            <Text style={theme.lesson.level}>Cấp Độ {levels}</Text>
            <Text style={theme.lesson.unit}>Bài học {questionIndex + 1}</Text>
            <View style={theme.lesson.wrapImg}>
              <Image
                source={filteredData && filteredData[questionIndex].imgurl}
                style={theme.lesson.img}
                resizeMode={'contain'}></Image>
              <Text style={theme.lesson.vocabulary}>
                {filteredData ? filteredData[questionIndex].answer : ''}
              </Text>
              <Text style={theme.lesson.vietnamese}>
                {filteredData ? filteredData[questionIndex].vietnamese : ''}
              </Text>
            </View>
            <View style={theme.lesson.btnView}>
              <Button
                name={'sound'}
                colorButton={'#FF6F91'}
                btnValue={'Nghe phát âm'}
                onPressSubmit={() =>
                  this._onPressRepeat(filteredData[questionIndex].answer)
                }
                style={{marginRight: 6}}
              />
              <Button
                name={'controller-next'}
                colorButton={'#31BB62'}
                btnValue={'Bài tiếp theo'}
                onPressSubmit={() => this._onPressNext(levels, topics)}
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
              Để làm được bài tập thì bé cần làm gì trước nào?
            </Text>
            <Text style={theme.welcome.flogo2}>Đúng rồi!.</Text>
            <Text style={theme.welcome.flogo2}>Bé phải học từ mới trước.</Text>
            <Button
              btnValue={'Học thôi nào!'}
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
