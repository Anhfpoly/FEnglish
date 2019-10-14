import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {Header} from '../../components';
import theme from '../../constants/theme';
import {images} from '../../data/data';
import {Button} from '../../components';

export default class LevelDetails extends Component {
  static navigationOptions = {header: null};
  state = {
    scores: 10,
  };
  _onPressNext = () => {
    alert('Next');
  };
  _onPressRepeat = () => {
    alert('Repeat');
  };
  render() {
    const {levels, topics} = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title={topics} />
        <View style={theme.lvdetail.container}>
          <Text style={theme.lvdetail.level}>Cấp Độ {levels}</Text>
          <Text style={theme.lvdetail.unit}>Bài học 1</Text>
          <View style={theme.lvdetail.wrapImg}>
            <Image source={images.topic1} style={theme.lvdetail.img}></Image>
            <Text style={theme.lvdetail.vocabulary}>Từ Vựng</Text>
          </View>
          <View style={theme.lvdetail.btnView}>
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
      </SafeAreaView>
    );
  }
}
