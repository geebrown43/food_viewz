// @flow

import React, {Component} from "react"
import {StatusBar} from "react-native"
import {Provider} from "react-redux"
import configureStore from "./store/createStore"
import NavContainer from "./navigation/index"

const store = configureStore()


class FoodViewz extends Component {
  render (){
    return (
      <Provider store={store}>
        <NavContainer />
      </Provider>
    )
  }
}


export default FoodViewz