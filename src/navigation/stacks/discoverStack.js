import React from "react"
import {createStackNavigator} from "react-navigation"
import Discover from "../../screens/Discover"

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Discover,
        navigationOptions:{
            header: null
        }
    } 
}, 
{
    initialRouteName: "Discover"
})

export default DiscoverStack    