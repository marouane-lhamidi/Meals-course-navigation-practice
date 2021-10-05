import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';
import { combineReducers, createStore } from 'redux'
import {Provider} from "react-redux";


import NavigationApp from "./Navigation/MealsNavigation";
import mealsReducer from "./Store/Reducers/mealsReducer";

const reducers = combineReducers({
  mealsReducer,
});

const store = createStore(reducers)

enableScreens();

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans':require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/Fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const  [loadedFont, setLoadedFont] = useState(false);

  if (!loadedFont){
    return (
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setLoadedFont(true)}
            onError={(err) => console.log(err)}
        />
    )
  }
  return (
      <Provider store={store}>
        <NavigationApp />
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
