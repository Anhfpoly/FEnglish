import AsyncStorage from '@react-native-community/async-storage';

export const shuffle = function(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const storeData = async (key, value) => {
  try {
    let oldData = await getData();
    if (oldData) {
        let parseObj = JSON.parse(oldData)
        console.log(parseObj)
        console.log(value)
    //   await AsyncStorage.setItem(key, [...oldData, value]);
    } else {
      await AsyncStorage.setItem(key, value);
    }
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
