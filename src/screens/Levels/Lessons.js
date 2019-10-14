import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../../components';
import theme from '../../constants/theme';
import {images} from '../../data/data';
import {Button} from '../../components';

export default class Lessons extends Component {
  static navigationOptions = {header: null};
  state = {
    scores: 10,
    isStartLesson: false,
  };
  _onPressNext = (value, value2) => {
    this.props.navigation.navigate('Exercises', {levels: value, topics: value2});
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
          <View style={theme.lesson.container}>
            <Text style={theme.lesson.level}>Cấp Độ {levels}</Text>
            <Text style={theme.lesson.unit}>Bài học 1</Text>
            <View style={theme.lesson.wrapImg}>
              <Image source={images.topic1} style={theme.lesson.img}></Image>
              <Text style={theme.lesson.vocabulary}>Từ Vựng</Text>
            </View>
            <View style={theme.lesson.btnView}>
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
                onPressSubmit={()=>this._onPressNext(levels, topics)}
              />
            </View>
          </View>
        ) : (
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            colors={['#550031', '#760056', '#910084', '#a01fbd', '#9c44fe']}
            style={theme.welcome.linearGradient}>
            <Text style={theme.welcome.flogo}>Để làm được bài tập thì bé cần làm gì trước nào?</Text>
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
