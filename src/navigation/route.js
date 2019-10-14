import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Import screens
import Welcome from '../screens/Welcome';
import Topics from '../screens/Topics';
import TopicDetails from '../screens/Topics/TopicDetails';
import Levels from '../screens/Levels';
import Lessons from '../screens/Levels/Lessons';
import Exercises from '../screens/Levels/Exercises';
import Result from '../screens/Result';
import ResultDetails from '../screens/Result/ResultDetails';

const hideHeader = {
  navigationOptions: {
    header: null,
  },
};
const TopicsStack = createStackNavigator(
  {
    Topics: Topics,
    TopicDetails: TopicDetails,
  },
  hideHeader,
);
const LevelsStack = createStackNavigator(
  {
    Levels: Levels,
    Lessons: Lessons,
    Exercises: Exercises,
  },
  hideHeader,
);
const ResultStack = createStackNavigator(
  {
    Result: Result,
    ResultDetails: ResultDetails,
  },
  hideHeader,
);
const MainStack = createStackNavigator({
  TopicsStack: TopicsStack,
  LevelsStack: LevelsStack,
  ResultStack: ResultStack,
});
const AuthSwitch = createSwitchNavigator({
  Welcome: Welcome,
  MainStack: MainStack,
});
const MainContainer = createAppContainer(AuthSwitch);
export default MainContainer;
