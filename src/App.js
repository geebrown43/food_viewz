// @flow

import React, {Component} from "react"
import {StatusBar} from "react-native"
import {Provider} from "react-redux"
import configureStore from "./store/createStore"
import HomeScreen from "./screens/Home"


const store = configureStore()


class FoodViewz extends Component {
  render (){
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    )
  }
}


export default FoodViewz