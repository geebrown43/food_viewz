import React from "react"
import {createStackNavigator} from "react-navigation"
import Home from "../../screens/Home"

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            header: null
        }
    } 
}, 
{
    initialRouteName: "Home"
})

export default HomeStack