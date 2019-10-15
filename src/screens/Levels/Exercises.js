import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../../components';
import theme from '../../constants/theme';
import {images} from '../../data/data';
import data from '../../data/data';
import {Button, Answer} from '../../components';

export default class Exercises extends Component {
  static navigationOptions = {header: null};
  state = {
    scores: 10,
    isStartLesson: false,
    colorOption1: '#929798',
    colorOption2: '#929798',
    colorOption3: '#929798',
    colorOption4: '#929798',
  };
  _onPressAnswer = (value, value2) => {
    //Đáp án 1
    if (value === 'option1' && value2 === 'true') {
      this.setState({colorOption1: '#31BB62'});
    } else if (value === 'option1' && value2 === 'false') {
      this.setState({colorOption1: '#ff4800'});
    }
    //Đáp án 2
    if (value === 'option2' && value2 === 'true') {
      this.setState({colorOption2: '#31BB62'});
    } else if (value === 'option2' && value2 === 'false') {
      this.setState({colorOption2: '#ff4800'});
    }
    //Đáp án 3    
    if (value === 'option3' && value2 === 'true') {
      this.setState({colorOption3: '#31BB62'});
    } else if (value === 'option3' && value2 === 'false') {
      this.setState({colorOption3: '#ff4800'});
    }
    //Đáp án 4    
    if (value === 'option4' && value2 === 'true') {
      this.setState({colorOption4: '#31BB62'});
    } else if (value === 'option4' && value2 === 'false') {
      this.setState({colorOption4: '#ff4800'});
    }
  };
  _onPressNext = () => {
    alert('Next');
  };
  _onPressRepeat = () => {
    alert('Repeat');
  };
  _changeStatus = () => {
    this.setState({isStartLesson: !this.state.isStartLesson});
  };
  render() {
    const {levels, topics} = this.props.navigation.state.params;
    const {item} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={topics} />
        {this.state.isStartLesson ? (
          <View style={theme.exercise.container}>
            <Text style={theme.exercise.level}>Cấp Độ {levels}</Text>
            <Text style={theme.exercise.unit}>Bài tập 1</Text>
            <View style={theme.exercise.wrapImg}>
              <Image source={images.topic1} style={theme.exercise.img}></Image>
            </View>
            <Text style={theme.exercise.vocabulary}>Câu hỏi?</Text>
            <View>
              <Answer
                answer={'Đáp án 1'}
                colorAnswer={this.state.colorOption1}
                onPressAnswer={() => this._onPressAnswer('option1', 'true')}
              />
              <Answer
                answer={'Đáp án 2'}
                colorAnswer={this.state.colorOption2}
                onPressAnswer={() => this._onPressAnswer('option2', 'false')}
              />
              <Answer
                answer={'Đáp án 3'}
                colorAnswer={this.state.colorOption3}
                onPressAnswer={() => this._onPressAnswer('option3', 'false')}
              />
              <Answer
                answer={'Đáp án 4'}
                colorAnswer={this.state.colorOption4}
                onPressAnswer={() => this._onPressAnswer('option4', 'false')}
              />
            </View>
            <View style={theme.exercise.btnView}>
              <Button
                name={'controller-next'}
                colorButton={'#FF6F91'}
                btnValue={'Bài tiếp theo'}
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
