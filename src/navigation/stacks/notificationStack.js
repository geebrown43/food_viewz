import React from "react"
import {createStackNavigator} from "react-navigation"
import Notification from "../../screens/Notification"

const NotificationStack = createStackNavigator({
    Notification: {
        screen: Notification,
        navigationOptions:{
            header: null
        }
    } 
}, 
{
    initialRouteName: "Notification"
})

export default NotificationStack