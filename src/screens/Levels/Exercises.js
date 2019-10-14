import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../../components';
import theme from '../../constants/theme';
import {images} from '../../data/data';
import {Button} from '../../components';

export default class Exercises extends Component {
  static navigationOptions = {header: null};
  state = {
    scores: 10,
    isStartLesson: false,
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
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={topics} />
        {this.state.isStartLesson ? (
          <View style={theme.exercise.container}>
            <Text style={theme.exercise.level}>Cấp Độ {levels}</Text>
            <Text style={theme.exercise.unit}>Bài tập 1</Text>
            <View style={theme.exercise.wrapImg}>
              <Image source={images.topic1} style={theme.exercise.img}></Image>
              <Text style={theme.exercise.vocabulary}>Từ Vựng</Text>
            </View>
            <View style={theme.exercise.btnView}>
              <Button
                name={'sound'}
                colorButton={'#FF6F91'}
                btnValue={'Nghe phát âm'}
                onPressSubmit={this._onPressRepeat}
                style={{marginRight: 6}}
              />
              <Button
                name={'controller-next'}
                colorButton={'#31BB62'}
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
            <Text style={theme.welcome.flogo}>Bé đã hoàn thành bài học thật xuất sắc!</Text>
            <Text style={theme.welcome.flogo2}>Hãy thử làm những bài tập sau đây để xem bé ghi nhớ được những gì nha!</Text>
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
