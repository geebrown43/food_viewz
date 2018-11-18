// @flow

import React, {Component} from "react"
import {StatusBar, SafeAreaView} from "react-native"
import {Provider} from "react-redux"
import configureStore from "./store/createStore"
import NavContainer from "./navigation/index"

const store = configureStore()


class FoodViewz extends Component {
  render (){
    return (
      <Provider store={store}>
        <SafeAreaView style={{backgroundColor:"#5F1FD6", flex: 1}}>
        <NavContainer />
        </SafeAreaView>
      </Provider>
    )
  }
}


export default FoodViewz