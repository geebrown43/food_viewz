import React from "react"
import {createStackNavigator} from "react-navigation"
import Landing from "../../screens/Landing"
import Login from "../../screens/Landing/Login"
import Signup from "../../screens/Landing/Sign-Up"

const LandingStack = createStackNavigator({
    Landing: {
        screen: Landing,
        navigationOptions:{
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    } 
}, 
{
    initialRouteName: "Landing"
})

export default LandingStack