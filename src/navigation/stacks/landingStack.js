import React from "react"
import {createStackNavigator} from "react-navigation"
import Landing from "../../screens/Landing"

const LandingStack = createStackNavigator({
    Landing: {
        screen: Landing,
        navigationOptions:{
            header: null
        }
    } 
}, 
{
    initialRouteName: "Landing"
})

export default LandingStack